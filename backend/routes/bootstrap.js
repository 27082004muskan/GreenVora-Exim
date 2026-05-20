const express = require('express');
const { getBootstrap } = require('../controllers/bootstrapController');
const requireDb = require('../middleware/requireDb');

const router = express.Router();

router.get('/', requireDb, getBootstrap);

module.exports = router;
