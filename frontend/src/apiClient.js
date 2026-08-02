import { API_BASE } from './api';

const IS_PROD = import.meta.env.PROD;
const MAX_ATTEMPTS = IS_PROD ? 5 : 4;
const TIMEOUT_MS = IS_PROD ? 45000 : 15000;
const CLIENT_CACHE_MS = 10 * 60 * 1000;

const memoryCache = new Map();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function readStorage(key) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.expiresAt || parsed.expiresAt <= Date.now()) {
      sessionStorage.removeItem(key);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

function writeStorage(key, data) {
  try {
    sessionStorage.setItem(
      key,
      JSON.stringify({ data, expiresAt: Date.now() + CLIENT_CACHE_MS })
    );
  } catch {
    // Ignore quota errors
  }
}

function getCached(key) {
  const mem = memoryCache.get(key);
  if (mem && mem.expiresAt > Date.now()) return mem.data;
  return readStorage(key);
}

function setCached(key, data) {
  memoryCache.set(key, { data, expiresAt: Date.now() + CLIENT_CACHE_MS });
  writeStorage(key, data);
}

export async function apiGet(path, { cacheKey, useCache = true } = {}) {
  const shouldCache = IS_PROD ? useCache : false;
  const key = cacheKey || path;
  if (shouldCache) {
    const cached = getCached(key);
    if (cached !== null && cached !== undefined) return cached;
  }

  const url = `${API_BASE}${path}`;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch(url, { signal: controller.signal });
      const payload = await res.json().catch(() => null);

      if (res.status === 503 && payload?.retry && attempt < MAX_ATTEMPTS) {
        await sleep(1500 * attempt);
        continue;
      }

      if (!res.ok) {
        throw new Error(payload?.error || `Request failed (${res.status})`);
      }

      if (shouldCache) setCached(key, payload);
      return payload;
    } catch (err) {
      if (attempt < MAX_ATTEMPTS) {
        await sleep(1500 * attempt);
        continue;
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  throw new Error('Request failed');
}

/** Wake Render backend + load products into cache as early as possible. */
export function warmBackend() {
  apiGet('/api/health', { cacheKey: 'health', useCache: false }).catch(() => {});
  prefetchProducts().catch(() => {});
}

export async function prefetchProducts() {
  const products = await apiGet('/api/products', { cacheKey: 'products:all' });
  return Array.isArray(products) ? products : [];
}

function filterByCategory(all, category) {
  if (!category || category === 'All') return all;
  return all.filter((p) => p.category === category);
}

export function getProductsFromCache(category = 'All') {
  const all = getCached('products:all');
  if (!Array.isArray(all)) return null;
  return filterByCategory(all, category);
}

export function clearProductsCache() {
  memoryCache.delete('products:all');
  try {
    sessionStorage.removeItem('products:all');
  } catch {
    // ignore
  }
}

export function clearServicesCache() {
  memoryCache.delete('services');
  try {
    sessionStorage.removeItem('services');
  } catch {
    // ignore
  }
}

export async function getProducts(category = 'All') {
  const cached = getProductsFromCache(category);
  if (cached) return cached;

  const all = await prefetchProducts();
  return filterByCategory(all, category);
}
