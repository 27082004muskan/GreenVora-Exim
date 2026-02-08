// In development, use relative URLs (Vite proxy forwards /api to backend).
// In production on Render, set VITE_API_URL to your backend URL.
export const API_BASE = import.meta.env.VITE_API_URL || '';

// Warn if API_BASE is empty in production (helps debug Render deployment)
if (import.meta.env.PROD && !API_BASE) {
  console.error('⚠️ VITE_API_URL is not set! API calls will fail. Set it in Render environment variables.');
}
