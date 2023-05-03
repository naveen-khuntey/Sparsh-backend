const mongoose = require('mongoose');
const {Schema} = mongoose;

const AppointmentSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    descrtiption: String
});

module.exports = mongoose.model('appointment', AppointmentSchema)