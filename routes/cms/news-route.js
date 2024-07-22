// 网站新闻
const express = require('express');
const router = express.Router();
const { newsController } = require('../../controllers/cms'); 

router.get('/inquireList',newsController.inquireList)
router.post('/addNews',newsController.addData)
router.post('/whereId',newsController.whereId)
router.post('/updata',newsController.updata)
router.post('/inquireType',newsController.whereType)


module.exports = router;