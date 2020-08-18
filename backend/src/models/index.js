/* eslint-disable no-unused-vars */
const Barber = require('./barber')
const Client = require('./client')
const { Booking, findBookingsByClient, findBookingsByBarber, cancelBooking } = require('./booking')

const apptDate = new Date()

const cem = new Barber({name :'Cem', address: 'Wilhelm Str 14 65800 Wiesbaden'})
const furkan = new Barber({ name :'Furkan',address: 'Mainzerland str 25 67300 Frankfurt am Main'})
const mihri = new Barber({name: 'Mihri', address: 'Eckenheimer Tor 11 67900 Frankfurt am Main'})

const hilmi = new Client({name:'Hilmi', phone:'+491725005050', email:'hlmgnc@gmail.com'})
const gaby = new Client({name: 'Gaby', phone:'+491772333', email:'gaby@gaby.com'})
const paloma = new Client({name: 'Paloma',phone: '+491778880404', email: 'paloma@paloma.com'})
const jing = new Client({name: 'Jing', phone :'+490809696', email: 'jing@jing.com'})
const alina = new Client({name: 'Alina', phone: '+4916677443', email: 'alina@alina.com'})

const bookings = []
const booking = new Booking({client: gaby, barber: furkan, date: apptDate })
bookings.push(booking)

const booking2 = new Booking({client: hilmi, barber: cem, date: apptDate })
bookings.push(booking2)

const booking3 = new Booking({client: paloma,barber: mihri, date: apptDate })
bookings.push(booking3)

const booking4 = new Booking({client: alina,barber: furkan,date: apptDate })
bookings.push(booking4)

const booking5 = new Booking({client: jing,barber: furkan, date: apptDate })
bookings.push(booking5)

const booking6 = new Booking({client: gaby, barber: cem,date: apptDate })
bookings.push(booking6)

const booking7 = new Booking({client: gaby, barber: mihri, date: apptDate)
bookings.push(booking7)

// let bookingId = '66767003-a2a1-491b-ba51-8d4d95e531ef'
// return bookings.filter( booking => booking.bookingId !== bookingId )

// let bookingId = booking.bookingId
// bookings = cancelBooking(bookings, bookingId)
// console.log(bookings)

// const hilmisBookings = findBookingsByClient(hilmi,bookings)
// console.log(hilmisBookings)

const gabysBookings = findBookingsByClient(gaby, bookings)
console.log(gabysBookings)

// const furkansBookings = findBookingsByBarber(furkan,bookings)
// console.log(furkansBookings)
