const express = require('express');
const router = express.Router();
const { getDomesticProducts } = require('../controllers/domesticProductController');
const requireDb = require('../middleware/requireDb');

router.get('/', requireDb, getDomesticProducts);

module.exports = router;
