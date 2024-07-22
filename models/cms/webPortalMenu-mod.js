
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database'); // 引入 Sequelize 实例
const { v4: uuidv4 } = require('uuid');

class WebMenu extends Model { }

WebMenu.init({ //用于初始化模型的属性和选项。
    id_: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    menu_name_en_: {
        type: DataTypes.STRING,
    },
    menu_name_ch_: {
        type: DataTypes.STRING,
    },
    form_: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,  //指定连接的数据库实例
    modelName: 'WebMenu',  //模型的名称
    tableName: 'cms_web_portal_menu' // 指定关联的数据库表名称
});

module.exports = WebMenu;
