const express = require('express')

const router = express.Router()

const Barber = require('../models/barber')


router.get('/', async (req, res) => {
    const query = {}
  
    if (req.query.name) {
      query.name = req.query.name
    }
  
    if (req.query.address) {
      query.address = req.query.address
    }
  
    if (req.query.expert)  {
      query.expert = req.query.expert
    }
  
    res.send(await Barber.find(query))
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


router.get('/:barberId', async (req, res) => {
    const barber = await Barber.findById(req.params.barberId)
  
    if (barber) res.render('barber', { barber })
    else res.sendStatus(404)
  })
  
  module.exports = router