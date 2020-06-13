const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const port = process.env.PORT || 8081;

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//mysql
const tasks = require('./routes/api/tasks');
app.use('/api/tasks', tasks);

app.get('/', (req, res) => {
    res.send(console.log("Hi"));
});

app.post('/register', (req, res) => {
    res.send({
        message: `${req.body.email}`
    });
});

app.listen(port, () => console.log(`Server started on port ${port}`));