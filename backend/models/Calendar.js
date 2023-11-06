const mongoose = require('mongoose')

const Schema = mongoose.Schema

const calendarSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  meeting_date: {
    type: Date,
    required: true
  },
  meeting_id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Calendar', calendarSchema)