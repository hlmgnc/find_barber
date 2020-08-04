const Barber = require("./barber");
const Client = require("./client");
const Booking = require("./booking");

let apptDate;
apptDate = new Date();

const cem = new Barber("Cem", "Wilhelm Str 14 65800 Wiesbaden");
const furkan = new Barber("Furkan","Mainzerland str 25 67300 Frankfurt am Main");
const mihri = new Barber("Mihri", "Eckenheimer Tor 11 67900 Frankfurt am Main");

const hilmi = new Client("Hilmi", "+491725005050", "hlmgnc@gmail.com");
const gaby = new Client("Gaby", "+491772333", "gaby@gaby.com");
const paloma = new Client("Paloma", "+491778880404", "paloma@paloma.com");
const jing = new Client("Jing", "+490809696", "jing@jing.com");
const alina = new Client("Alina", "+4916677443", "alina@alina.com");

let bookings = [];
let booking = new Booking(gaby, furkan, apptDate);
bookings.push(booking);

let clientId 

// clientId = hilmi.clientId
// const hilmisBookings = bookings.filter((booking ) => {
//   console.log(booking)

//   return booking.client.clientId === clientId
// });
const hilmisBookings = findBookingsByClient(hilmi)

console.log(hilmisBookings)   

clientId = gaby.clientId
const gabysBookings = bookings.filter((booking ) => {
  console.log(booking)

  return booking.client.clientId === clientId
});
console.log(gabysBookings)  



  

 

 