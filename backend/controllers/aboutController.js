const About = require('../models/About');

exports.getAbout=async(req, res)=>{
    
    try {
        let aboutData = await About.findOne();
        if(!aboutData){

            aboutData = new About({
        heading: 'Welcome To Greenvora Exim',
        aboutUs: {
          title: 'About Us',
          content: 'Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service. We believe in building long-term partnerships through transparent communication, consistent quality, and a customer-first approach. Our commitment to timely deliveries, ethical operations, and dependable support ensures a seamless and trustworthy experience for clients across global markets.',
          image: '/assets/aim.png'
        },
        vision: {
          title: 'Our Vision',
          content: 'Our vision is to build Greenvora Exim into a trusted global partner known for delivering reliable, sustainable, and high-quality export solutions. We are committed to ethical sourcing, consistent product quality, and a customer-first approach that ensures long-term business success. By expanding our international network, strengthening supply capabilities, and offering value-driven services, we aim to support businesses worldwide with dependable products and seamless import–export experiences. Our focus is on creating meaningful, long-lasting partnerships that contribute to transparent, responsible, and sustainable global trade.',
          image: '/assets/vision.png'
        }
            });

await aboutData.save();
console.log('Default about data created !');
        }
        res.json(aboutData);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
};
