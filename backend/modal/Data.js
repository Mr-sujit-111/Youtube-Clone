const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    channelName: {
        type: String,
        required: true
    },
    view: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    uploadTime: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('details', dataSchema);