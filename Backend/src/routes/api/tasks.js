const express = require('express');

const router = express.Router();

const createConnection = require('../../utils/database');

// Get Tasks
router.get('/', (req, res) => {
    createConnection(function(err, connection){

        connection.query('SELECT * FROM tasks', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        });

        connection.release();
    });
});

// Add Tasks

// Delete Tasks

module.exports = router;