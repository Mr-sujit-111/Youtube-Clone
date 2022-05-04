const express = require('express');
const Data = require('./routes/data.js');
const connection = require('./db');
const mongoose = require('mongoose');
const cors = require('cors');

// middlewares 
const app = express()
app.use(cors())
const port = 8080;
app.use(express.json())
connection();
// Routes 
app.use('/data', Data);

// listen method 
app.listen(port, () => {
    console.log(`Connection was success at port ${port}`)
});