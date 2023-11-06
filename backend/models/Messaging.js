const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messagingSchema = new Schema({
    user_id: {
        type: Number,
        required: true
    },
    past_message_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Messaging', messagingSchema)