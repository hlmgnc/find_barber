class Client {
    constructor(name, phone, email) {
      this.name = name
      this.phone = phone
      this.email = email
      this.bookings = []    
    }
  
    createBooking(barber, date) {
      this.bookings.push({
        name: barber.name,
        date,
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
    /*cancelBooking(barber){
        this.bookings = this.bookings.filter((booking) => {
            if (booking.name === barber.name) {
              bookings.splice(0,1);
            }
            return booking;
        })
        barber.cancelBooking(this);
    }*/
}
  
  class Barber {
    constructor(name, address) {
      this.name = name;
      this.address = address;
      this.experts = ["haircut", "manicure"];
      this.bookings = [];
    }
  
    createBooking(client, date) {
      this.bookings.push({
        name: client.name,
        date,
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
    /*cancelBooking(client){
        this.bookings = this.bookings.filter((booking) => {
            if (booking.name === client.name) {
              bookings.pop();
            }
            return booking;
        })
    }*/
  }
  
  //
  //    INIT
  //
  const cem = new Barber("Cem", "Wilhelm Str 14 65800 Wiesbaden");
  const hilmi = new Client("Hilmi", "+491725005050", "hlmgnc@gmail.com");
  //console.log(cem,hilmi)
  
  //
  //    CREATE
  //
  console.log("CREATE");
  let apptDate;
  apptDate = new Date(); // this is the date we want for the appointment
  hilmi.createBooking(cem, apptDate); // running this creates a booking with the SAME date for hilmi and cem
  console.log(hilmi.bookings);
  console.log(cem.bookings);
  
  
  //
  //    UPDATE
  //
  console.log("UPDATE");
  
  apptDate.setMonth(8); // set/change the month to September
  hilmi.updateBooking(cem, apptDate); // running this create a booking with the SAME , but NEW date for hilmi and cem
  
  console.log(hilmi.bookings);
  console.log(cem.bookings);

  /* //
  //    CANCEL
  //
  console.log("CANCEL");
  
  hilmi.cancelBooking(cem); // running this create a booking with the SAME , but NEW date for hilmi and cem
  
  console.log(hilmi.bookings);
  console.log(cem.bookings);*/