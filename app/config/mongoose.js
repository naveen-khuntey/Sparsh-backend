const mongoose = require('mongoose');

const INIT = async () => {
    await mongoose.connect('mongodb+srv://sparsh:sparsh@cluster0.hvrkrmt.mongodb.net/sparsh').then(console.log('Server : Mongoose Connected'));
};

module.exports = INIT;