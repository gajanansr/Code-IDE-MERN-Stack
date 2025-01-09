let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gajanan1055:<KRlmgVnUwcCwJQFp>@bank.c9ts2.mongodb.net/?retryWrites=true&w=majority&appName=bank');

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date:{
    type: Date,
    default: Date.now
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection
