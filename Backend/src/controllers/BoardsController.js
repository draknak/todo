const {Board} = require('../models')

module.exports = {
    async post (req, res) {
        try {
            const board = await Board.create(req.body)
            res.send (board)
        } catch (err) {
            res.status(400).send({
                error: 'An error has occured trying to create the board'
            })
        }
    },
    async index (req, res) {
        try {
            const boards = Board.findAll({
                limit: 10
            })
            res.send(boards)
        } catch (err) {
            res.status(400).send({
                error: 'an error has occured trying to fetch the boards'
            })
        }
    }
}