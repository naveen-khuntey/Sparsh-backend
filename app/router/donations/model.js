const mongoose = require('mongoose');
const {Schema} = mongoose;

const donationSchema = new Schema({
    name: {
        type: String,
        required: true
    },  
    phone: {
        type: Number, 
        required: true
    },
    blood : {
        type: String,
        required : true
    },
    bmi : Number,
    pin : Number,
});

module.exports = mongoose.model('donation' , donationSchema);