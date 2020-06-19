module.exports = {
    port: 8081,
    db: {
        database: 'todo',
        user: 'todo',
        password: 'todo',
        options: {
            host: "database",
            dialect:  "mysql",
        }
    },
    authentication: {
        jwtSecret: 'secret'
    }
}