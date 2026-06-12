const express = require('express');
const router = express.Router();
const { getAbout, updateAbout } = require('../controllers/aboutController');
const requireDb = require('../middleware/requireDb');

router.get('/', requireDb, getAbout);
router.put('/', requireDb, updateAbout);

module.exports=router;
