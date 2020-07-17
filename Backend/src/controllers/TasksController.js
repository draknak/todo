const {Task} = require('../models')

module.exports = {
    async post (req, res) {
        try {
            const task = await Task.create(req.body)
            res.send (task)
        } catch (err) {
            res.status(400).send({
                error: 'An error has occured trying to create the task'
            })
        }
    }
}