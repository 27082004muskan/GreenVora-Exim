const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    title:{
        type:String ,
        required:true
    } ,
    subtitle:{
         type:String ,
        required:true
    },
    description:{
         type:String ,
        required:true
    },
    image: String,
  cta1: { text: String, path: String },
  cta2: { text: String, path: String }
},{timestamps:true});

module.exports = mongoose.model('Hero' , heroSchema);
