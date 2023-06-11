const express = require('express');
const router = express.Router();

const HomeController = require('../home.controller');

router.get('/home', HomeController.showHome);

module.exports = router;