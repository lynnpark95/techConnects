const mongoose = require('mongoose')

const Schema = mongoose.Schema

const meetingSchema = new Schema({
  meeting_id: {
    type: String,
    required: true
  },
  meeting_time: {
    type: String,
    required: true
  },
  meeting_day: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Meeting', meetingSchema)