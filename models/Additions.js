const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AdditionSchema = new Schema({
name:String,
amountOfAddition: Number,
    date:Date,
    status:String
}
);

var addition = mongoose.model('addition', AdditionSchema);

module.exports = addition