const { v4: uuidv4 } = require('uuid');
const Client = require('./client')

class Booking{
    constructor(client, barber, date) { 
        this.client = client       
        this.barber = barber        
        this.date = date
        const bookingId = uuidv4();
        this.bookingId = bookingId
    } 
    function findBookingsByClient(client, bookings) {
          return bookings.filter(booking => {
          return booking.client.clientId === client.clientId
        })
    } 
}
module.exports = { Booking , findBookingsByClient } 