var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: String,
  lastname:String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true}
});

userSchema.methods.toJSON = function() {
  var obj = this.toObject()
  delete obj.password
  return obj
}

var User = mongoose.model('User', userSchema);

module.exports = User;

