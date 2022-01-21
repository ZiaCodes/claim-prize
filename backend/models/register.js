const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");


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

//middleware
// userSchema.pre('save', async function(next){
//     console.log(`Hello from BcryptJs!`);
//     if(this.isModified('password')){
//         this.password = bcrypt.hash(this.password,12);
//         this.cpassword = bcrypt.hash(this.cpassword,12);
//     }
//     next();
// });

//model 
const Register =  mongoose.model("Register", userSchema);
module.exports = Register;