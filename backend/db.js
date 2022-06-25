const mongoose = require('mongoose';

const mongodbUrl = 'mongodb url'

const connection = () => {
    const connectionParams = {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    }
    mongoose.connect(mongodbUrl, connectionParams)
        .then(() => {
            console.log('Connected to database ')
        })
        .catch((err) => {
            console.error(`Error connecting to the database. \n${err}`);
        })
}

module.exports = connection;