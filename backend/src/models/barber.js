const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')


const barberSchema = new mongoose.Schema({
    name: String,
    address: String,
    experts: [],
    barberId : Number,

})
module.exports = mongoose.model('Barber', barberSchema)


