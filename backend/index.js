const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const enquiryRoutes= require('./routes/enquiry');
const heroRoutes=require('./routes/hero');
const aboutRoutes = require('./routes/about');
const serviceRoutes = require('./routes/service');

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/enquiry',enquiryRoutes);
app.use('/api/hero',heroRoutes);
app.use('/api/about',aboutRoutes);
app.use('/api/services',serviceRoutes);

// Global error handler - YE ADD KARO (app ke baad)
app.use((err, req, res, next) => {
  console.error('🚨 500 ERROR:', err.message);
  console.error('Stack:', err.stack);
  res.status(500).json({ success: false, message: 'Server error: ' + err.message });
});


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongodb Connected"))
.catch(err=>console.error('Mongo err:',err));

app.listen(PORT ,()=>console.log(`Server on port ${PORT}`));
