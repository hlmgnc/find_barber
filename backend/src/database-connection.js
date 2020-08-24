const mongoose = require('mongoose')

let connectionString = process.env.MONGODB_CONNECTION_STRING

if (!connectionString) {
  connectionString = `mongodb+srv://:@cluster0.knvjh.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`
}

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log)


