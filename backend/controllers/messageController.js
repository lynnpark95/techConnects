const Message = require('../models/Message')

const createMessage = async (req, res) => {
    try {
        const dbMessage = req.body
        const data = await Message.create(dbMessage)
        res.status(201).send(data)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const syncMessage = async (req, res) => {
    try {
        const data = await Message.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { createMessage, syncMessage }