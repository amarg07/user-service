const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  address: String,
});

const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;

