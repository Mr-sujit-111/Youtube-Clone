const mongoose = require('mongoose');

// const mongod = "mongodb+srv://sujit123:sujitsujit@123@cluster0.wz2me.mongodb.net/YoutubeClone?retryWrites=true&w=majority";

const mongodbUrl = "mongodb+srv://sujit123:P2dApja4tUwGYXbt@cluster0.wz2me.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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