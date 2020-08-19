const mongoose = require('mongoose')

const barberSchema = new mongoose.Schema({
    
    name: {
        type: String,
        unique: true,
        required: true,
    },
    address: {
        type: String,
        unique: true,
        required :true,
    },    
    experts: [{ type: String }],
    
    bookedBy: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Client',
        },
      ],

})
module.exports = mongoose.model('Barber', barberSchema)


