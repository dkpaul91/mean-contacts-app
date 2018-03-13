const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contact', ContactSchema);