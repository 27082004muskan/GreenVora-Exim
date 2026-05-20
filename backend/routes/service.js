const express = require('express');
const router = express.Router();
const { getServices } = require('../controllers/serviceController');
const requireDb = require('../middleware/requireDb');

router.get('/', requireDb, getServices);

module.exports=router;
