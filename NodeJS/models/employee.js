const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    email: { type: String },
    address: { type: String },
    country: { type: String },
    dob: {type: String}
});

module.exports = { Employee };