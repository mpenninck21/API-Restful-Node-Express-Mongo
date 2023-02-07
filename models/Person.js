const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String, 
    email: String,
    phone_number: Number, 
    gamertag: String,
})


module.exports = Person