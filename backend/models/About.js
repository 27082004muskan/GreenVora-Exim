const mongoose = require('mongoose');

const aboutSectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    image: { type: String, default: '' },
  },
  { _id: false }
);

const aboutSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true, trim: true },
    aboutUs: {
      type: aboutSectionSchema,
      required: true,
      default: () => ({
        title: 'About Us',
        content: '',
        image: 'aim.png',
      }),
    },
    vision: {
      type: aboutSectionSchema,
      required: true,
      default: () => ({
        title: 'Our Vision',
        content: '',
        image: 'vision.png',
      }),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);
