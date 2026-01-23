const mongoose = require('mongoose');
const aboutSchema= new mongoose.Schema({
    heading:{
        type:String , 
        required:true
    },
    aboutUs:{
        title:{
         type:String , 
        required:true
        },
        content:{
            type:String , 
        required:true  
        }
    },
    vision:{
     title:{
         type:String , 
        required:true
        },
        content:{
            type:String , 
        required:true  
        }
}
},{timestamps:true});


module.exports = mongoose.model('About', aboutSchema);