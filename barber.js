const { v4: uuidv4 } = require('uuid');
class Barber {
    constructor(name, address) {
      this.name = name
      this.address = address
      this.experts = ["haircut", "manicure"]
      this.bookings = []
      const barberId = uuidv4();
      this.barberId = barberId
    }   
}
module.exports = Barber