const About = require('../models/About');
const Service = require('../models/Services');
const DomesticProduct = require('../models/DomesticProduct');

async function seedDefaults() {
  const tasks = [];

  tasks.push(
    About.countDocuments().then(async (count) => {
      if (count > 0) return;
      await About.create({
        heading: 'Welcome To Greenvora Exim',
        aboutUs: {
          title: 'About Us',
          content:
            'Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service.',
          image: '/assets/aim.png',
        },
        vision: {
          title: 'Our Vision',
          content:
            'Our vision is to build Greenvora Exim into a trusted global partner known for delivering reliable, sustainable, and high-quality export solutions.',
          image: '/assets/vision.png',
        },
      });
      console.log('Default about data seeded');
    })
  );

  tasks.push(
    Service.countDocuments().then(async (count) => {
      if (count > 0) return;
      await Service.insertMany([
        {
          title: 'Exporter Services',
          description:
            'We help businesses access global markets with reliable, end-to-end export solutions.',
          icon: 'TrendingUp',
        },
        {
          title: 'Sourcing Agent Services',
          description:
            'We act as your on-ground sourcing partner in India—finding the right manufacturers and ensuring quality.',
          icon: 'Users',
        },
      ]);
      console.log('Default services seeded');
    })
  );

  tasks.push(
    DomesticProduct.countDocuments().then(async (count) => {
      if (count > 0) return;
      await DomesticProduct.insertMany([
        {
          name: 'Handmade Jute Shopping Bag',
          category: 'Jute Products',
          image: 'jute-bag.png',
          description: 'Eco-friendly jute bag perfect for shopping',
        },
      ]);
      console.log('Default domestic products seeded');
    })
  );

  await Promise.all(tasks);
}

module.exports = { seedDefaults };
