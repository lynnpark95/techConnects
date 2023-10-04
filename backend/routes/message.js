const express = require('express')

// controller functions
const { createMessage, syncMessage } = require('../controllers/messageController')

const router = express.Router()

// Create message route
router.post('/create', createMessage)

// Sync message route
router.get('/sync', syncMessage)

module.exports = router