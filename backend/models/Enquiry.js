const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String ,
        required:true
    },
    message:{
        type:String,
        required:true
    }
} ,{timestamps:true});

module.exports=mongoose.model('Enquiry',enquirySchema);