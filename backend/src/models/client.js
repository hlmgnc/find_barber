const { v4: uuidv4 } = require('uuid');
const Booking = require('./booking')
const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema ({

  name : String,
  phone : String,
  email : String,
  clientId : Number,
})


module.exports = mongoose.model('Client' , clientSchema)
