const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const userData = [
    { id: '1', name: 'Task1', status: 'pending' },
    { id: '2', name: 'Task2', status: 'pending' },
    { id: '3', name: 'Task3', status: 'pending' }
];

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/gettask', (req, res) => {
    res.send(userData);
});

app.post('/changeStatus', (req, res) => {
    let id = req.body.id;

    for (let index = 0; index < userData.length; index++) {
        if (userData[index].id == id) {
            userData[index].status = 'done';
        }
    }

    res.send('Done');
});

app.listen(2024, () => {
    console.log("Server up!");
});