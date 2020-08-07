const Barber = require("./barber");
const Client = require("./client");
const { Booking, findBookingsByClient, findBookingsByBarber, cancelBooking } = require("./booking");

var apptDate;
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

let booking2 = new Booking(hilmi, cem, apptDate);
bookings.push(booking2);

let booking3 = new Booking(paloma, mihri, apptDate);
bookings.push(booking3);

let booking4 = new Booking(alina, furkan, apptDate);
bookings.push(booking4);

let booking5 = new Booking(jing, furkan, apptDate);
bookings.push(booking5);

let booking6 = new Booking(gaby, cem, apptDate);
bookings.push(booking6);

let booking7 = new Booking(gaby, mihri, apptDate);
bookings.push(booking7);


// let bookingId = '66767003-a2a1-491b-ba51-8d4d95e531ef'
// return bookings.filter( booking => booking.bookingId !== bookingId )


// let bookingId = booking.bookingId
// bookings = cancelBooking(bookings, bookingId)
// console.log(bookings)

//const hilmisBookings = findBookingsByClient(hilmi,bookings) 
//console.log(hilmisBookings)  

const gabysBookings = findBookingsByClient(gaby, bookings)
console.log(gabysBookings)  

//const furkansBookings = findBookingsByBarber(furkan,bookings)
//console.log(furkansBookings)
  

 

 