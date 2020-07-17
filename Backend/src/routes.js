const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

const TasksController = require('./controllers/TasksController');

const BoardsController = require('./controllers/BoardsController');


module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register, 
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.post('/task',
        TasksController.post)

    app.get('/boards',
        BoardsController.index)
    app.post('/boards',
        BoardsController.post)
}