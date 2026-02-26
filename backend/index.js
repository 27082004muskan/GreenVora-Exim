const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");  // ← Added for static files
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

// ✅ CORS: Updated for custom domain + local
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://greenvora-exim-frontend.onrender.com',
  'https://greenvoraexim.com',
  'https://www.greenvoraexim.com'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

// ✅ API ROUTES FIRST (All your existing routes)
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/products", productRoutes);
app.use("/api/domestic-products", domesticRoutes);

// ✅ SINGLE DOMAIN SETUP - Frontend static files (PRODUCTION ONLY)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));  // Vite build folder
  // Agar Create React App use kar rahi ho to 'build' use karo:
  // app.use(express.static(path.join(__dirname, 'build')));
  
  // Catch-all route for React Router (LAST API route ke baad)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
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
  .then(() => console.log("✅ Mongodb Connected"))
  .catch((err) => console.error("❌ Mongo err:", err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Production mode: ${process.env.NODE_ENV === 'production'}`);
});
