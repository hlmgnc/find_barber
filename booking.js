const { v4: uuidv4 } = require('uuid');
class Booking{
    constructor(client, barber, date) { 
        this.client = client       
        this.barber = barber        
        this.date = date
        const bookingId = uuidv4();
        this.bookingId = bookingId
            //console.log(bookingId)
        }

        addBooking(booking) {
            this.bookings.push(booking)
        } 
       /* createBooking(clientId, barberId, date) {
            this.bookings.push({
              name: barber.name,
              date,
              id: barber.barberId
            });
        
            barber.createBooking(this, date);
        } 
        updateBooking(barber, newDate) {
            this.bookings = this.bookings.map((booking) => {
              if (booking.name === barber.name) {
                booking.date = newDate;
              }
              return booking;
            })
        
            barber.updateBooking(this, newDate);
        }
        cancelBooking(barber) {
                this.bookings = this.bookings.filter((booking) => {
                  if (booking.clientId === barber.name) {
                    return false
                  }
                    return true
                })
            barber.cancelBooking(this);
        } */
}
module.exports = Booking 