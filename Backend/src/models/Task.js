module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
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
    })
    return Task
}