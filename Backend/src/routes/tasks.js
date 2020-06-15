const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


// Get all tasks
router.get('/tasks', (req, res) => {
    Task.findAll()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        res.send("error: " + err)
    })
});

// Add Task
router.post('/task', (req, res) => {
    if(!req.body.task_title) {
        res.status(400);
        res.json({
            error: "Bad data" 
        });
    } else {
        Task.create(req.body)
        .then(() => {
            res.send("Task added")
        })
        .catch(err => {
            res.send("error: " + err)
        })
    }
});

// Delete Task
router.delete('/task/:id', (req, res) => {
    Task.destroy({
        where: {
            task_id: req.params.id
        }
    })
    .then(() => {
        res.send("Task deleted")
    })
    .catch(err => {
        res.send("error: " + err)
    })
});

module.exports = router;