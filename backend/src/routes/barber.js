const express = require('express')

const router = express.Router()
const Barber = require('../models/barber')

router.get('/', async (req, res) => {
  const barbers = await Barber.find({})
  res.send(barbers)
})

router.post('/', async (req, res) => {
  const createdBooking = await PushSubscriptionOptions.create(req.body)
  res.send(createdBooking)
})
  
module.exports = router