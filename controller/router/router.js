const express = require('express');
const router = express.Router();

const HomeController = require('../home.controller');

router.get('/home', HomeController.showHome);
router.get('/home/:id/edit', (req, res) => { console.log(req.params) });
router.get('/home/:id/delete', HomeController.delete);

router.get('/add', HomeController.showAdd);
router.post('/add', HomeController.add);

module.exports = router;