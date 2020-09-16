const express = require('express')
const User = require('../models/client')
const router = express.Router()
const passport = require('passport')

/* GET home page. */
router.get('/session',(req, res) => {
  res.send(req.session)
})

router.post('/', async (req,res) => {
    
    const {name, phone, email, password} = req.body
    
    const user = new User ({ name, age, email })
    await user.setPassword(password)
    await user.save()

    return user
})
router.post('/session',
    passport.authenticate('local', { failWithError: true }), async (req,res) => {
    res.send(req.user)
})
router.delete('/session', (req,res) => {
    res.logout()
    res.send(true)
})
module.exports = router