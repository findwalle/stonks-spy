const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  watchlist: {type: Array, required: false}
})

userSchema.pre('save', function(next){
  const user = this;

  bcrypt.hash(user.password, SALT_FACTOR, (err, hash) => {
    if (err) return next(err);

    user.password = hash;
    return next();
  })
})

module.exports = mongoose.model('User', userSchema);