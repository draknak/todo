const Sequelize = require('sequelize');
const db = require('../utils/database');

module.exports = db.sequelize.define(
    "tasks",
    {
        task_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_title: {
            type: Sequelize.STRING
        },
        task_description: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: true,
    }
);