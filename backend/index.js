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

// ✅ CORS: allow local + Render + your custom domains
// Use hostname-based matching to avoid issues with ports / minor origin variations.
const allowedHostnames = new Set([
  "localhost",
  "127.0.0.1",
  "greenvora-exim-frontend.onrender.com",
  "greenvoraexim.com",
  "www.greenvoraexim.com",
]);

app.use(
  cors({
    origin: (origin, cb) => {
      // allow requests with no origin (curl, server-to-server)
      if (!origin) return cb(null, true);
      try {
        const url = new URL(origin);
        if (allowedHostnames.has(url.hostname)) {
          // Return the exact origin so Access-Control-Allow-Origin is set correctly
          return cb(null, origin);
        }
      } catch (_) {
        // fall through
      }
      return cb(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);

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
