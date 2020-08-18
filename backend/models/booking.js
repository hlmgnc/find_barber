const { v4: uuidv4 } = require('uuid');

class Booking{
    constructor(client, barber, date) { 
        this.client = client       
        this.barber = barber        
        this.date = date
        const bookingId = uuidv4();
        this.bookingId = bookingId
    } 
    
}
const findBookingsByClient = (client, bookings) => bookings.filter(booking => booking.client.clientId === client.clientId)

const findBookingsByBarber = (barber, bookings) => bookings.filter(booking => booking.barber.id === barber.id)

const cancelBooking = (bookings, bookingId) => bookings.filter(booking => booking.bookingId !== bookingId)

module.exports = { Booking, findBookingsByClient, findBookingsByBarber, cancelBooking }