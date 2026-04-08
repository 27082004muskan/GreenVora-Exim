const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Routes imports
const enquiryRoutes = require("./routes/enquiry");
const heroRoutes = require("./routes/hero");
const aboutRoutes = require("./routes/about");
const serviceRoutes = require("./routes/service");
const productRoutes = require("./routes/product");
const domesticRoutes = require("./routes/domestic");

// ✅ CORS: allow local + Render + custom domains
const allowedOrigins = new Set([
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://greenvora-exim-frontend.onrender.com",
  "https://greenvoraexim.com",
  "https://www.greenvoraexim.com",
]);

const allowedHostnames = new Set([
  "localhost",
  "127.0.0.1",
  "greenvora-exim-frontend.onrender.com",
  "greenvoraexim.com",
  "www.greenvoraexim.com",
]);

const corsOptions = {
  origin: (origin, cb) => {
    // Allow non-browser requests (curl, server-to-server)
    if (!origin) return cb(null, true);

    if (allowedOrigins.has(origin)) return cb(null, true);

    try {
      const url = new URL(origin);
      if (allowedHostnames.has(url.hostname)) return cb(null, true);
    } catch (_) {
      // Invalid origin format, handled by rejection below.
    }

    return cb(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));

app.use(express.json());

// ✅ API ROUTES FIRST (All your existing routes)
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/products", productRoutes);
app.use("/api/domestic-products", domesticRoutes);

// If you want to serve a built frontend from the backend, enable it explicitly.
// On Render you're deploying frontend separately, so keep this OFF to avoid `dist/index.html` ENOENT errors.
const distIndex = path.join(__dirname, "dist", "index.html");
if (process.env.SERVE_FRONTEND === "true" && fs.existsSync(distIndex)) {
  app.use(express.static(path.join(__dirname, "dist")));

  // Catch-all route for SPA routing (Express 5 safe)
  app.get(/.*/, (req, res) => {
    res.sendFile(distIndex);
  });
}

// ✅ Global error handler (LAST)
app.use((err, req, res, next) => {
  console.error("🚨 500 ERROR:", err.message);
  console.error("Stack:", err.stack);
  res.status(500).json({ 
    success: false, 
    message: "Server error: " + err.message 
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.error(" Mongo err:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Production mode: ${process.env.NODE_ENV === 'production'}`);
});
