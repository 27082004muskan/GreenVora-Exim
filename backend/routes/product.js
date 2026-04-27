// routes/product.js
const express = require('express');
const { getProducts, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.delete('/:id', deleteProduct);

module.exports = router;
