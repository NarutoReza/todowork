const mongoose = require('mongoose')

const Model = new mongoose.Schema({
    name:{type:String},
    status:{type:String}
})

module.exports = mongoose.model('Model', Model)