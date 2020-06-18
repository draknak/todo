module.exports = (sequelize, DataTypes) => 
    sequelize.define('Task', {
        task_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_title: {
            type: DataTypes.STRING
        },
        task_description: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: true,
    }
);