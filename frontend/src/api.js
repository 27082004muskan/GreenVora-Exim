// In development, use relative URLs (Vite proxy forwards /api to backend).
// In production on Render, set VITE_API_URL to your backend URL.
export const API_BASE = import.meta.env.VITE_API_URL || '';
