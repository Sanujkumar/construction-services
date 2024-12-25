const mongoose = require("mongoose");
const UserConstruction = require('./userSchema');

const bookingDataSchema = mongoose.Schema({
    serviceId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },   
    bookingDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    bookingId: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserConstruction',
        required: true
    },

});

const BookingData = mongoose.model("BookingData", bookingDataSchema);
module.exports = BookingData;      