const Enquiry = require('../models/Enquiry');
const { sendEnquiryNotification } = require('../utils/emailService');

exports.createEnquiry=async(req,res)=>{

    try{
        const{name , email , message}=req.body;
       if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields required' });
       } 

       const enquiry = new Enquiry({name , email , message});
       await enquiry.save();
       
       // Send email notification (don't fail the request if email fails)
       try {
         await sendEnquiryNotification({ name, email, message });
       } catch (emailError) {
         console.error('Email notification failed:', emailError);
         // Continue even if email fails - enquiry is still saved
       }
       
       res.status(201).json({success:true , message:'Entry saved'})
    }catch(error){ 
    console.error('Enquiry error:', error);
    res.status(500).json({
        success: false,
        message: 'Server error'
    });
}

    
};