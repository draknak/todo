const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

const TaskController = require('./controllers/TaskController');


module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register, 
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.post('/task',
        TaskController.add)
}