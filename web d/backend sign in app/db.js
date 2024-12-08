const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://goku:Ram%401000@cluster0.smlzp.mongodb.net/Goku");

const studentSchema = mongoose.Schema({
  name:String,
  email:String,
  subject:String,
  mssg:String

});
const info =mongoose.model('info',studentSchema);

module.exports = {
   info
}
