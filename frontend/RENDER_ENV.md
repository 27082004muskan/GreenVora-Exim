# Render deployment – connect to backend

So the frontend talks to your backend on Render, set this **Environment Variable** for the **frontend** service in the Render dashboard:

| Key            | Value                                  |
|----------------|----------------------------------------|
| `VITE_API_URL` | `https://greenvora-backend.onrender.com` |

Then redeploy the frontend. The backend already allows requests from `https://greenvora-exim-frontend.onrender.com` (CORS).
