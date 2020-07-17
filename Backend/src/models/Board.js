module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        board_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        board_title: {
            type: DataTypes.STRING
        },
        board_description: {
            type: DataTypes.STRING
        }
    })
    return Board
}