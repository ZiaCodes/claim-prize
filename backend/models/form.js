const mongoose = require("mongoose");

//Schema

const formSchema = new mongoose.Schema({
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
    state : {
        type: String,
        required: true
    }

})

//model 
const Form = mongoose.model("Form", formSchema);
module.exports = Form;