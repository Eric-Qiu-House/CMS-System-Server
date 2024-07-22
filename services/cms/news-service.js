const { newsMod } = require('../../models/cms');

// 新闻
//全部
async function findNewsList() {
  try {
    const data = await newsMod.findAll({
      attributes: ['id_', 'title_', 'visit_num_', 'release_time_', 'release_name_', 'status_', 'update_time_', 'updater_', 'language_']
    });
    if (data.length > 0) {
      return data;
    } else {
      console.log('No users found');
      return [];
    }
  } catch (error) {
    console.error('Error finding users:', error);
    throw error;
  }
}
// 类型查询
async function whereNewsType(req) {
  try {
    console.log(req.body,'body')
    if ('menu_class_' in req.body) {
      const { menu_class_ } = req.body;
      const data = await newsMod.findAll({ where: { menu_class_ } })

      if (data) {
        // console.log('Found user:', data);
        return data
      } else {
        console.log('User not found');
        return null;
      }
    }

    if ('belong_to_' in req.body) {
      const { belong_to_ } = req.body;
      const data = await newsMod.findAll({ where: { belong_to_ } })

      if (data) {
        // console.log('Found user:', data);
        return data
      } else {
        console.log('User not found');
        return null;
      }
    }

  } catch (error) {
    console.error('Error finding user:', error);
    throw error;
  }
}
// 指定 id 查询
async function whereNewsId(req) {
  try {
    const { id_ } = req.body;
    const data = await newsMod.findOne({ where: { id_, } })
    if (data) {
      console.log('Found user:', data);
      return data
    } else {
      console.log('User not found');
      return null;
    }
  } catch (error) {
    console.error('Error finding user:', error);
    throw error;
  }
}
// 更新-新闻状态
async function updateNewsStatus(req) {
  try {
    console.log(req.body, 'reqreqreqreq')
    const { id_ } = req.body
    const newData = req.body
    // const newData = {
    //   status_: 0,
    //   title_: '123456'
    // }
    console.log(id_, newData, 'ssssssssssssss')
    const data = await newsMod.findByPk(newData.id_);
    if (data) {
      await data.update(newData, { fields: Object.keys(newData) });
      return data;
    } else {
      console.log('data not found');
      return null;
    }
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}
// 新增
async function createNews(req) {
  try {
    const { title_, content_, } = req.body;
    console.log(title_, content_)
    const data = await newsMod.create({ title_, content_ })
    return data;
  } catch (error) {
    console.error('Error finding users:', error);
    throw error;
  }
}
module.exports = {
  findNewsList,
  whereNewsId,
  whereNewsType,
  updateNewsStatus,
  createNews
}