const mongoose = require("mongoose");

//Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    pin: {
        type: Number,
        required:true
    },

})

//model 

const USer = new mongoose.model("User", userSchema);

model.export = User;