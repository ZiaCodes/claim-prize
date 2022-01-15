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
    password: {
        type: String,
        required:true
    },
    cpassword : {
        type: String,
        required: true
    }

})

//model 
const Register =  mongoose.model("Register", userSchema);

module.exports = Register;