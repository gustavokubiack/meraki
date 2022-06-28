import mongoose from 'mongoose';
const {Schema} = mongoose;

const causeSchema = new Schema ({
    title: String,
    desc: String,
    img: String,
    state: String,
    city: String,
    neighborhood: String,
    street: String,
    numberHouse: String,
})

module.exports('Cause', causeSchema)