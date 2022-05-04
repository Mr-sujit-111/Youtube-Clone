const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Data = require('../modal/Data.js')

router.get('/', (request, response) => {
    try {
        Data.find({}, function(err, posts) {
            if (err) {
                console.log(err);
            } else {
                response.json(posts);
            }
        });
    } catch (error) {
        console.error(error.message);
        response.status(500).send({ status: false, message: "internal server error", data: "no data found" });
    }
})

// 2. set data into mongodb details collection
router.post('/', async(request, response) => {
    try {
        // set all data from request to contact collection //
        const { name, channelName, view, uploadTime, category, image } = request.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ error: errors.array() });
        }
        const status = await Data.create({
            name: request.body.name,
            channelName: request.body.channelName,
            view: request.body.view,
            uploadTime: request.body.uploadTime,
            category: request.body.category,
            image: request.body.image,
        });
        console.log(status)
        response.status(200).send({ name, channelName, view, uploadTime, category, image })

    } catch (error) {
        console.error(error.message);
        response.status(500).send("Internal Server Error");
    }
})

module.exports = router