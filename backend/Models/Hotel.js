const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Hotel', UserSchema)