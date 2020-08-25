//const autopopulate = require('mongoose-autopopulate')
const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema ({
    name: {
      type: String,
      unique: true,
      required: true,
    },

    phone: {
      type: String,
      unique: true,
      required: true,
    },

    email :{
      type : String,
      unique: true,
      required: true,
    }, 
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Barber',
      },
    ],
    // updates: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Barber',
    //   },
    // ], 
    // cancellations: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Barber',
    //   },
    // ],
})
class Client {
  async book(barber) {
    this.bookings.push(barber)
    await this.save()
  }
}

clientSchema.loadClass(Client)
//clientSchema.plugin(autopopulate)

module.exports = mongoose.model('Client' , clientSchema)
