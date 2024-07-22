
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database'); // 引入 Sequelize 实例
const { v4: uuidv4 } = require('uuid');

class Sort extends Model { }

News.init({ //用于初始化模型的属性和选项。
    id_: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    title_: {
        type: DataTypes.STRING,
    },
    content_: {
        type: DataTypes.TEXT('long'),
    },
    images_: {
        type: DataTypes.STRING,
    },
    attachments_: {
        type: DataTypes.STRING,
    },
    comments_num_: {
        type: DataTypes.INTEGER, // INTEGER 类型
    },
    visit_num_: {
        type: DataTypes.INTEGER, // INTEGER 类型
    },
    release_time_: {
        type: DataTypes.DATE, // DATETIME 类型
    },
    release_by_: {
        type: DataTypes.STRING,
    },
    release_name_: {
        type: DataTypes.STRING,
    },
    status_: {
        type: DataTypes.TINYINT
    },
    create_time_: {
        type: DataTypes.DATE, // DATETIME 类型
    },
    create_by_: {
        type: DataTypes.STRING,
    },
    create_org_id_: {
        type: DataTypes.STRING,
    },
    update_time_: {
        type: DataTypes.DATE, // DATETIME 类型
        defaultValue: DataTypes.NOW,
    },
    updater_: {
        type: DataTypes.STRING,
    },
    update_by_: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,  //指定连接的数据库实例
    modelName: 'Sort',  //模型的名称
    tableName: 'cms_sort' // 指定关联的数据库表名称
});

module.exports = Sort;
