const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    chosenCause: String,
    description: String,
    image: String,
    state: String,
    city: String,
    neighborhood: String,
    street: String,
    numberHouse: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);



