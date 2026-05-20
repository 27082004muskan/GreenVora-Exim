// routes/product.js
const express = require('express');
const { getProducts, deleteProduct } = require('../controllers/productController');
const requireDb = require('../middleware/requireDb');
const router = express.Router();

router.get('/', requireDb, getProducts);
router.delete('/:id', requireDb, deleteProduct);

module.exports = router;
