const About = require('../models/About');
const Hero = require('../models/Hero');
const Service = require('../models/Services');
const DomesticProduct = require('../models/DomesticProduct');
const Product = require('../models/Product');
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
      if (count >= 4) return;
      const defaults = [
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
        {
          title: 'Quality Assurance & Inspection',
          description:
            'Pre-shipment inspection, factory audits, and rigorous quality control to ensure export compliance.',
          icon: 'Shield',
        },
        {
          title: 'Custom Eco-Packaging Solutions',
          description:
            'Tailored design and manufacturing of biodegradable jute, paper, and compostable packaging products.',
          icon: 'Leaf',
        },
      ];
      for (const s of defaults) {
        await Service.updateOne({ title: s.title }, { $setOnInsert: s }, { upsert: true });
      }
      console.log('Default services seeded/updated');
    })
  );

  tasks.push(
    Product.countDocuments().then(async (count) => {
      if (count > 0) return;
      await Product.insertMany([
        {
          name: 'Handmade Jute Shopping Bag',
          category: 'Jute Packaging',
          image: 'bag.png',
          description: 'Durable, eco-friendly jute shopping bag suitable for daily retail and global exports.',
        },
        {
          name: 'Eco Jute Storage Basket',
          category: 'Jute Packaging',
          image: 'basket.png',
          description: 'Handcrafted jute basket ideal for sustainable home storage and decor.',
        },
        {
          name: 'Decorative Jute Craft Item',
          category: 'Others',
          image: 'decorative_item.png',
          description: 'Artisanal decorative item made from 100% natural eco-friendly jute fibers.',
        },
        {
          name: 'Jute Gift Packaging Bag',
          category: 'Jute Packaging',
          image: 'gift.png',
          description: 'Premium eco-conscious gift pouch for special events and brand packaging.',
        },
        {
          name: 'Biodegradable Compostable Pouch',
          category: 'Compostable Packaging',
          image: 'items.png',
          description: '100% compostable and eco-friendly packaging solution for modern sustainable businesses.',
        },
        {
          name: 'Custom Printed Paper Packaging',
          category: 'Paper Packaging',
          image: 'map.png',
          description: 'Heavy-duty recyclable paper packaging designed for international export standards.',
        },
        {
          name: 'Natural Jute Fiber Rope',
          category: 'Jute Packaging',
          image: 'rope.png',
          description: 'Strong, biodegradable natural jute twine and industrial grade rope.',
        },
        {
          name: 'Heavy Duty Jute Storage Bag',
          category: 'Jute Packaging',
          image: 'storagebag.png',
          description: 'Spacious and reusable jute storage sack for bulk agricultural and home storage.',
        },
      ]);
      console.log('Default products seeded');
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
