  const Barber = require('./barber')
  const Client = require('./client')
  const Booking = require('./booking')

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
  //hilmi.updateBooking(cem, apptDate); 
  
  console.log(hilmi.bookings);
  console.log(cem.bookings);

  
  console.log("CANCEL");
  
  //hilmi.cancelBooking(cem); 
  
  //console.log(hilmi.bookings);
  //console.log(cem.bookings);
 

 