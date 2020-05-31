const express = require ('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

console.log("mongo URI is: ", config.development.database.mongoUri);

mongoose.connect(config.development.database.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log(`Connected to mongo instance: ${mongoose.connection.name}`)
});
mongoose.connection.on('error', (err) => {
    console.log(`Error connecting to mongo db: ${err}`)
});

app.get('/', (req, res) => {
    res.send('express')
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});