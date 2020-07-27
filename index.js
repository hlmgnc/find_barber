class Client {
    constructor(name,phone,email) {
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.bookings = []
        this.newDate = Date()
    }
    
    createBooking(barber,date) {
        this.bookings.push(barber)   
    }
    removeBooking(barber){
        this.bookings.pop(barber)
    }
    updateBooking(barber,newDate){
        this.bookings.splice(bookings.length-1, 1 ,newDate)
    }
}
class Barber {
    constructor(name,address,date) {
        this.name =name,
        this.address = address,
        this.date = Date(),
        this.experts = ['haircut','manicure']
        this.bookings = []
    }
    createBooking(client,date) {
        this.bookings.push(client)   
    }
}

const cem = new Barber('Cem','Wilhelm Str 14 65800 Wiesbaden')
const hilmi = new Client('Hilmi','+491725005050','hlmgnc@gmail.com')

//console.log(cem,hilmi)
hilmi.createBooking(cem)
cem.createBooking(hilmi)
console.log(hilmi.bookings[0].name)
console.log(cem.bookings[0].name)
//hilmi.removeBooking(cem)
//console.log(hilmi.bookings)
//hilmi.updateBooking(cem,Date())

