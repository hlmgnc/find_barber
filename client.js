const { v4: uuidv4 } = require('uuid');
class Client {
    constructor(name, phone, email) {
      this.name = name
      this.phone = phone
      this.email = email
      this.bookings = [] 
      const clientId = uuidv4();
      this.clientId = clientId
    }   
}
module.exports = Client