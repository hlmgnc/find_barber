const { v4: uuidv4 } = require('uuid');
class Booking{
    constructor(client, barber, date) { 
        this.client = client       
        this.barber = barber        
        this.date = date
        const bookingId = uuidv4();
        this.bookingId = bookingId
    }
        
        book(barber, apptDate) {
            this.bookings.push(booking)  
        } 
}
module.exports = Booking 