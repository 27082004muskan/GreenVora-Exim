// In development, keep API_BASE empty so Vite proxy handles /api requests.
// In production on Render, set VITE_API_URL to your backend URL.
const productionApiBase = import.meta.env.PROD ? import.meta.env.VITE_API_URL : '';
export const API_BASE = productionApiBase || '';

// Warn if API_BASE is empty in production (helps debug Render deployment)
if (import.meta.env.PROD && !API_BASE) {
  console.error('⚠️ VITE_API_URL is not set! API calls will fail. Set it in Render environment variables.');
}
