const stores = new Map();

function createCache(namespace, ttlMs = 5 * 60 * 1000) {
  if (!stores.has(namespace)) {
    stores.set(namespace, new Map());
  }
  const store = stores.get(namespace);

  return {
    get(key) {
      const entry = store.get(key);
      if (!entry) return null;
      if (entry.expiresAt <= Date.now()) {
        store.delete(key);
        return null;
      }
      return entry.data;
    },
    set(key, data) {
      store.set(key, { data, expiresAt: Date.now() + ttlMs });
    },
    clear() {
      store.clear();
    },
  };
}

function setPublicCacheHeaders(res, maxAgeSeconds = 300) {
  res.set('Cache-Control', `public, max-age=${maxAgeSeconds}`);
}

module.exports = { createCache, setPublicCacheHeaders };
