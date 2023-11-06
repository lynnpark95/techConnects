const mongoose = require('mongoose')

const Schema = mongoose.Schema

const careGiverSchema = new Schema({
    careRole: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('CareGiver', careGiverSchema)