// class Client {
//     constructor(name,phone,email) {
//         this.name = name,
//         this.phone = phone,
//         this.email = email,
//         this.bookings = []
//         this.date = Date()
//     }
    
//     createBooking(barber, date) {
//         this.bookings.push({
//             barber, 
//             date
//         })   
//     }
//     removeBooking(barber){
//         this.bookings.pop(barber)
//     }
//     updateBooking(barber,newDate){
//         this.bookings.splice(bookings.length-1, 1 ,new Date())
//     }
// }
// class Barber {
//     constructor(name,address) {
//         this.name =name,
//         this.address = address,
//         this.date = Date(),
//         this.experts = ['haircut','manicure']
//         this.bookings = []
//     }
//     createBooking(barber, date) {
//         this.bookings.push({
//             barber, 
//             date
//         })
//         barber.createBooking(this, date)
//     }
// }

// const cem = new Barber('Cem','Wilhelm Str 14 65800 Wiesbaden')
// const hilmi = new Client('Hilmi','+491725005050','hlmgnc@gmail.com')

// //console.log(cem,hilmi)
// hilmi.createBooking(cem, new Date())
// cem.createBooking(hilmi, new Date())
// console.log(hilmi.bookings)
// console.log(cem.bookings)
//hilmi.removeBooking(cem)
//console.log(hilmi.bookings)
//hilmi.updateBooking(cem,Date())

class Client {
    constructor(name, phone, email) {
      this.name = name,
      this.phone = phone,
      this.email = email,
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
      });
      barber.updateBooking(this, newDate);
    } 
}​
class Barber {
    constructor(name, address) {
      this.name = name,
      this.address = address,
      this.experts = ["haircut", "manicure"],
      this.bookings = []
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
  ​
        return booking;
      });
    }
  }
  ​
  //
  //    INIT
  //
  const cem = new Barber("Cem", "Wilhelm Str 14 65800 Wiesbaden");
  const hilmi = new Client("Hilmi", "+491725005050", "hlmgnc@gmail.com");
  //console.log(cem,hilmi)
  ​
  //
  //    CREATE
  //
  console.log("CREATE");
  let apptDate;
  apptDate = new Date(); // this is the date we want for the appointment
  hilmi.createBooking(cem, apptDate); // running this creates a booking with the SAME date for hilmi and cem
  console.log(hilmi.bookings);
  console.log(cem.bookings);
  ​
  // console.dir(hilmi);
  // console.dir(cem);
  ​
  // cem.createBooking(hilmi)
  // console.log(hilmi.bookings[0].name)
  // console.log(cem.bookings[0].name)
  //hilmi.removeBooking(cem)
  //console.log(hilmi.bookings)
  //hilmi.updateBooking(cem,Date())
  ​
  //
  //    UPDATE
  //
  console.log("UPDATE");
  ​
  apptDate.setMonth(8);
  hilmi.updateBooking(cem, apptDate); // running this create a booking with the SAME date for hilmi and cem
  ​
  console.log(hilmi.bookings);
  console.log(cem.bookings);