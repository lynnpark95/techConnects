//TH
//file schema for mongoDB
//needs to connect to messages endpoint

import mongoose from 'mongoose'
const messagingSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})
export default mongoose.model('messagingmessages', messagingSchema)