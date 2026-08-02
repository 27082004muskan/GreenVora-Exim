const express = require('express');
const router = express.Router();
const { getHero, updateHero } = require('../controllers/heroController');
const requireDb = require('../middleware/requireDb');

router.get('/', requireDb, getHero);
router.put('/', requireDb, updateHero);
router.post('/', requireDb, updateHero);
router.patch('/', requireDb, updateHero);

module.exports = router;