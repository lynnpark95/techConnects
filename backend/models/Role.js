const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roleSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  careRole: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Role', roleSchema)