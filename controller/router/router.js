const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' })

const HomeController = require('../home.controller');


router.get('/home', HomeController.showHome);
router.get('/home/:id/edit', HomeController.showUpdate);
router.post('/home/:id/edit', HomeController.editUpdate);
router.get('/home/:id/delete', HomeController.delete);

router.get('/add', HomeController.showAdd);
router.post('/add', HomeController.add);

router.get('/info/:id', HomeController.showInfo);

router.post('/avatar/:id', upload.single('avatar'), HomeController.addAvatar);

module.exports = router;