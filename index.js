  const Barber = require('./barber')
  const Client = require('./client')
  const Booking = require('./booking')
  let apptDate;
  apptDate = new Date();  

  const cem = new Barber("Cem", "Wilhelm Str 14 65800 Wiesbaden")
  const furkan = new Barber("Furkan", "Mainzerland str 25 67300 Frankfurt am Main")
  const mihri = new Barber("Mihri", "Eckenheimer Tor 11 67900 Frankfurt am Main")

  const hilmi = new Client("Hilmi", "+491725005050", "hlmgnc@gmail.com")
  const gaby = new Client("Gaby", "+491772333","gaby@gaby.com")
  const paloma = new Client("Paloma","+491778880404", "paloma@paloma.com")
  const jing = new Client("Jing", "+490809696", "jing@jing.com")
  const alina = new Client("Alina", "+4916677443", "alina@alina.com")
  let bookings = []
  //const bookings = []
  let booking = new Booking(gaby, furkan, apptDate) 
  bookings.push(booking)
  //gaby.addBooking(furkan)
  booking = new Booking(hilmi, furkan, apptDate) 
  bookings.push(booking)
  //hilmi.addBooking(furkan)
  booking = new Booking(paloma, furkan, apptDate) 
  bookings.push(booking)
  //paloma.addBooking(furkan)
  booking = new Booking(gaby, cem, apptDate) 
  bookings.push(booking)
  //gaby.addBooking(cem)
   //console.log("CREATE");
  //hilmi.createBooking(cem, apptDate); 
  //console.log(hilmi.bookings);
  //console.log(cem.bookings);
 
  //console.log(bookings)
  //console.log("UPDATE"); 
  //apptDate.setMonth(7); 
  //hilmi.updateBooking(cem, apptDate); 
  console.log(gaby.bookings); 
  //console.log(furkan.bookings);

  
  //console.log("CANCEL");
  
  //hilmi.cancelBooking(cem); 
  
  //console.log(hilmi.bookings);
  //console.log(cem.bookings);
 

 