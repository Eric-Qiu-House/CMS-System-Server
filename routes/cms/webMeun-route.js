const express = require('express');
const router = express.Router();
const { webMenuController } = require('../../controllers/cms'); 

router.get('/inquireList',webMenuController.inquireList)

module.exports = router;