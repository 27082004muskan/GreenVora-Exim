const Hero = require('../models/Hero');

exports.getHero=async(req, res)=>{
    try {
      let hero = await Hero.findOne();
      if(!hero){
        hero={
            title:'GREENVORA EXIM',
            subtitle:'Empowering Global Trade & Trusted Sourcing',
            description: 'Helping businesses find comprehensive export and sourcing solutions worldwide with a focus on quality, reliability, and sustainable partnerships.',
        cta1: { text: 'Learn More', path: '/learn-more' },
        cta2: { text: 'Contact Us', path: '/contact' }
        };
      }  
      res.json(hero);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}