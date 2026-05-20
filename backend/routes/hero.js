const express = require('express');
const router = express.Router();
const { getHero } = require('../controllers/heroController');
const requireDb = require('../middleware/requireDb');

router.get('/', requireDb, getHero);

module.exports=router;