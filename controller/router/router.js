const express = require('express');
const router = express.Router();

const HomeController = require('../home.controller');

router.get('/home', HomeController.showHome);
router.get('/home/:id/edit', HomeController.showUpdate);
router.post('/home/:id/edit', HomeController.editUpdate);
router.get('/home/:id/delete', HomeController.delete);

router.get('/add', HomeController.showAdd);
router.post('/add', HomeController.add);

router.get('/update, Hom')

module.exports = router;