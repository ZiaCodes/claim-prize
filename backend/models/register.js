const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required:true,
        trim: true
    },
    cpassword : {
        type: String,
        required: true,
        trim: true
    }

})

//hashing password
userSchema.pre('save',async function(next){
    console.log('Hey from BcryptJS');
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password, 10);
        this.cpassword = bcrypt.hash(this.cpassword, 10);
    }
    next();
});

//model 
const Register =  mongoose.model("Register", userSchema);
module.exports = Register;