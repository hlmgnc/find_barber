/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const Client = require('../models/client')
const Barber = require('../models/barber')

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.phone) {
    query.phone = req.query.phone
  }

  if (req.query.email)  {
    query.email = req.query.email
  }

  res.send(await Client.find(query))
})

router.get('initialize', async (req, res) => {


    const cem = await Barber.create({ name :'Cem', address: 'Wilhelm Str 14 65800 Wiesbaden' })
    const furkan = await Barber.create({ name :'Furkan', address: 'Mainzerland str 25 67300 Frankfurt am Main' })
    const mihri = await Barber.create({ name: 'Mihri', address: 'Eckenheimer Tor 11 67900 Frankfurt am Main' })

    const hilmi = await Client.create({ name:'Hilmi', phone:'+491725005050', email:'hlmgnc@gmail.com' })
    const gaby = await Client.create({ name: 'Gaby', phone:'+491772333', email:'gaby@gaby.com' })
    const paloma = await Client.create({ name: 'Paloma', phone: '+491778880404', email: 'paloma@paloma.com' })
    const jing = await Client.create({ name: 'Jing', phone :'+490809696', email: 'jing@jing.com' })
    const alina = await Client.create({ name: 'Alina', phone: '+4916677443', email: 'alina@alina.com' })

    await hilmi.book(cem)
    await hilmi.book(furkan)
    await gaby.book(mihri)

    console.log(hilmi)
    res.sendStatus(200)
})

router.get('/:clientId', async (req, res) => {
  const client = await Client.findById(req.params.clientId)

  if (client) res.render('client', { client })
  else res.sendStatus(404)
})

module.exports = router
