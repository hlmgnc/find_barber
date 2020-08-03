const { v4: uuidv4 } = require('uuid');
const Booking = require('./booking')
class Client {
    constructor(name, phone, email) {
      this.name = name
      this.phone = phone
      this.email = email
      this.bookings = [] 
      const clientId = uuidv4();
      this.clientId = clientId
    }   
    book(barber, date) {
        const booking = new Booking(barber, date)
        this.bookings.push(booking)
        return booking
    }
}
module.exports = Client