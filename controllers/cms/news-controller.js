const { newsService } = require('../../services/cms');

// 获取新闻列表
const inquireList = async  (req,res) => {
    try {
        const NewsList = await newsService.findNewsList();
        res.status(201).json(NewsList);
    } catch (error) {  
        res.status(500).json({ error: error.message });
    }
}

// 添加新闻
const addData = async (req,res) => {
    try {
        const data = await newsService.createNews(req);
        res.status(201).json(data);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// 更新新闻
const updata = async (req,res) => {
    try {
        const data = await newsService.updateNewsStatus(req);
        res.status(201).json(data);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// 查询唯一
const whereId = async (req,res) => {
    try {
        const data = await newsService.whereNewsId(req);
        res.status(201).json(data);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// 类型查询
const whereType = async (req,res) => {
    try {
        const data = await newsService.whereNewsType(req);
        res.status(201).json(data);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    inquireList,
    whereId,
    updata,
    addData,
    whereType
}