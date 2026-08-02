const mongoose = require('mongoose');

const ctaSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
    path: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const sectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
);

const keyProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
  },
  { _id: false }
);

const heroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, default: 'heroimg.png' },
    cta1: {
      type: ctaSchema,
      default: () => ({ text: 'View Products', path: '/products' }),
    },
    cta2: {
      type: ctaSchema,
      default: () => ({ text: 'Request a Demo', path: '/contact' }),
    },
    features: {
      type: [String],
      default: [
        'Sustainable Packaging Solutions',
        'Custom Branding & Printing',
        'Bulk Supply Support',
        'India & Global Markets',
      ],
    },
    whatWeDo: {
      type: sectionSchema,
      default: () => ({
        title: 'What We Do',
        content:
          'We provide sustainable packaging solutions designed to help businesses reduce environmental impact while enhancing brand visibility. Whether you need jute bags, compostable bags and paper bags our team delivers customized packaging solutions backed by quality, reliability, and scalable supply capabilities.',
      }),
    },
    keyProducts: {
      type: [keyProductSchema],
      default: () => [
        {
          title: 'Jute Packaging',
          description:
            'Sustainable jute packaging for shopping, gifting, and promotional use.',
          image: 'hero1.png',
        },
        {
          title: 'Compostable Packaging',
          description:
            'Eco-friendly packaging solutions designed for a more sustainable future.',
          image: 'hero2.png',
        },
      ],
    },
    whyChoose: {
      type: sectionSchema,
      default: () => ({
        title: 'Why Choose Greenvora Exim',
        content:
          'We provide sustainable packaging solutions that help businesses strengthen their brand, reduce environmental impact, and meet their unique packaging requirements through quality products and customization options.',
      }),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Hero', heroSchema);
