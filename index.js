class Client {
    constructor(name,phone,email) {
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.bookings = []
    }
    
    createBooking(barber) {
        this.bookings.push(barber)   
    }
    removeBooking(barber){
        this.bookings.pop(barber)
    }
}
class Barber {
    constructor(name,address,date) {
        this.name =name,
        this.address = address,
        this.date = date,
        this.experts = ['haircut','manicure']
    }
}

const cem = new Barber('Cem','Wilhelm Str 14 65800 Wiesbaden')
const hilmi = new Client('Hilmi','+491725005050','hlmgnc@gmail.com')

//console.log(cem,hilmi)
hilmi.createBooking(cem)
console.log(hilmi.bookings)
hilmi.removeBooking(cem)
console.log(hilmi.bookings)
