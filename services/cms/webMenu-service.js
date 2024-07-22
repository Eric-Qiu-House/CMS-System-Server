const { webMenuMod } = require('../../models/cms');

async function findList() {
    try {
      const data = await webMenuMod.findAll({
        attributes: ['id_', 'menu_name_en_', 'menu_name_ch_', 'form_' ]
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

  module.exports = {
    findList,
  }