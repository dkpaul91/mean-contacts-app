const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const route = require('./routes/route');

var app = express();
var port = 8000;

// Database Connection
mongoose.connect('mongodb://localhost:27017/contactList');
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('connected', (err) => {
    if (err) {
        console.log('Error in database connection', err);
    }
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Static files
app.use(express.static(path.join(__dirname + 'public')));

app.use('/api', route);

app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});