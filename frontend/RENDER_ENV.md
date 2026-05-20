# Render deployment – connect to backend

So the frontend talks to your backend on Render, set this **Environment Variable** for the **frontend** service in the Render dashboard:

| Key            | Value                                  |
|----------------|----------------------------------------|
| `VITE_API_URL` | `https://greenvora-backend.onrender.com` |

Then redeploy the frontend. The backend already allows requests from `https://greenvora-exim-frontend.onrender.com` (CORS).

## Keep backend awake (Render free tier)

On Render’s free plan, the backend **sleeps after ~15 minutes** of no traffic. The first visit after sleep can take **30–60+ seconds** while the server and MongoDB start.

To reduce “empty products” / slow loads:

1. Use a free uptime monitor (e.g. [UptimeRobot](https://uptimerobot.com)) to ping every **10–14 minutes**:
   - URL: `https://greenvora-backend.onrender.com/api/health`
2. Or upgrade the Render backend to a paid instance so it does not spin down.

## What was optimized

- Backend caches products/hero/services for 10 minutes and warms product cache on startup.
- Frontend prefetches products when the site opens (`main.jsx` → `warmBackend()`).
- Category filters on Products page are instant (client-side filter from cached list).
- All API calls retry automatically when Render/Mongo is waking up (503).
