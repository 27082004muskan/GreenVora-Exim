const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const enquiryRoutes= require('./routes/enquiry');
const heroRoutes=require('./routes/hero');
//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/enquiry',enquiryRoutes);
app.use('/api/hero',heroRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongodb Connected"))
.catch(err=>console.error('Mongo err:',err));

app.listen(PORT ,()=>console.log(`Server on port ${PORT}`));
