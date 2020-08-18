const { v4: uuidv4 } = require('uuid');
const bookingSchema = require('mongoose')

const bookingSchema = new mongoose.Schema({
    client: Object,
    barber: Object,
    date: Number,
    bookingId : Number,
})


const findBookingsByClient = (client, bookings) => bookings.filter(booking => booking.client.clientId === client.clientId)

const findBookingsByBarber = (barber, bookings) => bookings.filter(booking => booking.barber.id === barber.id)

const cancelBooking = (bookings, bookingId) => bookings.filter(booking => booking.bookingId !== bookingId)

module.exports = mongoose.model({ 'Booking', 'bookingSchema' },{'findBookingsByClient'}, {'findBookingsByBarber'},{ 'cancelBooking' })