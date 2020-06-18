module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'todo',
        user: process.env.DB_USER ||'todo',
        password: process.env.DB_PASS ||'todo',
        options: {
            host: process.env.HOST || "database",
            dialect: process.env.DIALECT ||"mysql",
        }
    }
}