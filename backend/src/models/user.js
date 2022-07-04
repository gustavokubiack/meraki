import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    answer5: String,
    answer6: String,
    chosenCause: String,
})

module.exports = mongoose.model('User', userSchema)
