var express = require('express');
var router = express.Router();
const uploadToImgur = require('../controllers/image');

router.post('/upload', uploadToImgur);

module.exports = router;