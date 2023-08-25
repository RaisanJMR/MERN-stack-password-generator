const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    reuiqred: true,
  },
  email: {
    type: String,
    reuiqred: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('User', userSchema)
