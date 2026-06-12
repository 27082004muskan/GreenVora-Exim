const About = require('../models/About');
const Hero = require('../models/Hero');
const Service = require('../models/Services');
const DomesticProduct = require('../models/DomesticProduct');
const { defaultHero } = require('../controllers/heroController');
const { defaultAbout } = require('../controllers/aboutController');

async function seedDefaults() {
  const tasks = [];

  tasks.push(
    Hero.countDocuments().then(async (count) => {
      if (count > 0) return;
      await Hero.create(defaultHero);
      console.log('Default hero data seeded');
    })
  );

  tasks.push(
    About.countDocuments().then(async (count) => {
      if (count > 0) return;
      await About.create(defaultAbout);
      console.log('Default about data seeded');
    })
  );

  tasks.push(
    About.findOne().then(async (doc) => {
      if (!doc) return;
      let changed = false;
      if (!doc.aboutUs?.image) {
        doc.aboutUs.image = 'aim.png';
        changed = true;
      }
      if (!doc.vision?.image) {
        doc.vision.image = 'vision.png';
        changed = true;
      }
      if (changed) {
        await doc.save();
        console.log('About images backfilled');
      }
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
