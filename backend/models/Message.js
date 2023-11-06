const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    past_message_id: {
        type: String,
        required: true
    },
    past_message_contents: {
        type: String,
        required: true
    },
    past_message_date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Message', messageSchema)