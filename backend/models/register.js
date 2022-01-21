const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
// const bcrypt = require("bcryptjs");


//Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
    },
    password: {
        type: String,
        required:true
    },
    cpassword : {
        type: String,
        required: true,
        trim:true,
    },
    tokens:[
        {
          token: {
              type: String,
              required: true
          }
        }
    ]

})

//Generating token
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY_JWT);
        this.tokens = this.tokens.concat({ token: token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

//model 
const Register =  mongoose.model("Register", userSchema);
module.exports = Register;