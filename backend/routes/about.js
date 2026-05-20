const express = require('express');
const router = express.Router();
const { getAbout } = require('../controllers/aboutController');
const requireDb = require('../middleware/requireDb');

router.get('/', requireDb, getAbout);

module.exports=router;
