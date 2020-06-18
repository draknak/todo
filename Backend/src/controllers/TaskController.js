const {Task} = require('../models')

module.exports = {
    async add (req, res) {
        try {
            const task = await Task.create(req.body)
            res.send (task.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Task already exists'
            })
        }
    }
}