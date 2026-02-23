const express = require('express');
const router = express.Router();
const { getDomesticProducts } = require('../controllers/domesticProductController.js');

// ✅ CHANGE FROM '/' OR '/domestic-products' TO THIS:
router.get('/', getDomesticProducts);  // Matches /api/domestic-products exactly

module.exports = router;
