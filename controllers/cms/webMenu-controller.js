const { webMenuService } = require('../../services/cms');

// 获取新闻列表
const inquireList = async  (req,res) => {
        console.log('55555')
        try {
        console.log('55555')
        const data = await webMenuService.findList();
        res.status(201).json(data);
    } catch (error) {  
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    inquireList
}