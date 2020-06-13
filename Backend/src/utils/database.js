const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'database',
    port: 3306,
    user: 'todo',
    password: 'todo',
    database: 'todo',
    multipleStatements: true
});

const getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

module.exports = getConnection;