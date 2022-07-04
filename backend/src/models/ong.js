import mongoose from 'mongoose';
const {Schema} = mongoose;

const ongSchema = new Schema ({
    name: String,
    email: String,
    phone: Number,
    ongType: String,
    registerDate: Date,
    acceptionDate: Date,
    state: String,
    city: String,
    neighborhood: String,
    street: String,
    numberHouse: String
})

module.exports = mongoose.model('Ong', ongSchema)