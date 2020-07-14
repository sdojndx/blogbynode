const mongoose = require('mongoose');

let userSchma = new mongoose.Schema({
    name:String,
    age:Number
})

module.exports = mongoose.model('User',userSchma);