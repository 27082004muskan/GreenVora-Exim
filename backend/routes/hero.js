const express = require('express');
const router = express.Router();
const { getHero, updateHero } = require('../controllers/heroController');
const requireDb = require('../middleware/requireDb');

router.get('/', requireDb, getHero);
router.put('/', requireDb, updateHero);

module.exports=router;