const { v4: uuidv4 } = require('uuid');
class Client {
    constructor(name, phone, email) {
      this.name = name
      this.phone = phone
      this.email = email
      this.bookings = [] 
      const clientId = uuidv4();
      this.clientId = clientId
      console.log(clientId)    
    }
  
    createBooking(barber, date, barberId) {
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
    cancelBooking(barber){
        this.bookings = this.bookings.filter((booking) => {
            if (booking.clientId === barber.name) {
              return false;
            }
              return true;
        })
        barber.cancelBooking(this);
    }
}
  
class Barber {
    constructor(name, address) {
      this.name = name
      this.address = address
      this.experts = ["haircut", "manicure"]
      this.bookings = []
      const barberId = uuidv4();
      console.log(barberId)  
      this.barberId = barberId
    }
  
    createBooking(client, date) {
      this.bookings.push({
        name: client.name,
        date,
        id: client.clientId
      });
    }
  
    updateBooking(client, newDate) {
        this.bookings = this.bookings.map((booking) => {
            if (booking.name === client.name) {
                booking.date = newDate;
            }
  
            return booking;
        });
    }
    cancelBooking(client){
        this.bookings = this.bookings.filter((booking) => {
            if (booking.name === client.name) {
              return false;
            }
              return true;
        })
    }
}
  
  const cem = new Barber("Cem", "Wilhelm Str 14 65800 Wiesbaden")
  const hilmi = new Client("Hilmi", "+491725005050", "hlmgnc@gmail.com")
  
  
  console.log("CREATE");
  let apptDate;
  apptDate = new Date(); 
  hilmi.createBooking(cem, apptDate); 
  console.log(hilmi.bookings);
  console.log(cem.bookings);
  
  
  console.log("UPDATE");
  
  apptDate.setMonth(7); 
  hilmi.updateBooking(cem, apptDate); 
  
  console.log(hilmi.bookings);
  console.log(cem.bookings);

  
  console.log("CANCEL");
  
  hilmi.cancelBooking(cem); 
  
  console.log(hilmi.bookings);
  console.log(cem.bookings);
 

 