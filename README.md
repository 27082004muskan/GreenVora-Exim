# GreenVora-Exim 🌿

Greenvora Exim is a sustainable import-export platform built for eco-conscious trade, specializing in jute bags and green products. Empowering my family startup to connect global buyers and sellers with seamless communication and secure data management.

[![MERN Stack](https://img.shields.io/badge/MERN-React_Node_Express_MongoDB-green?logo=react&logoColor=white)](https://mernjs.com/)

# Features
- **Product Catalog**: Showcase jute bags and sustainable products with rich images and descriptions
- **Advanced Contact System**: Secure email integration for buyer-seller communication
- **Real-time Admin Dashboard**: Manage products, inquiries, and orders
- **Responsive Design**: Mobile-first interface for global accessibility
- **MongoDB Data Storage**: Secure, scalable database for all business data
- **Sustainable Focus**: Built for green import-export businesses

# Tech Stack

- Frontend: React.js + Tailwind CSS + Vite
- Backend: Node.js + Express.js
- Database: MongoDB
- Deployment: Vercel/Render
- Images: Cloudinary
- Email: Nodemailer

Live Demo:  https://greenvora-exim-frontend.onrender.com/

## Local development

Run both servers together (recommended):

```bash
npm run install:all
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://127.0.0.1:3000`

### Troubleshooting

- If you see `ECONNREFUSED 127.0.0.1:3000` in the frontend terminal, the backend isn't running. Use `npm run dev` from the repo root to start both.
- If you need a different backend port/host, set `VITE_API_PROXY_TARGET` (example: `http://127.0.0.1:4000`) before starting the frontend.
