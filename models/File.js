const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FileSchema = new Schema({
fileName:{
        type :String
    },
owner : { type: Schema.ObjectId, ref: 'employees' }
},
{ 
    timestamps: true
});

var file = mongoose.model('files', FileSchema);

module.exports = file