const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
require('../db/config');

const Register = require('../models/register');

router.get('/',(req,res) => {
    res.send(`Hello world from router.js`);
});

//creating a new user 
router.post('/register', async(req,res)=>{

    const { name, email, password, cpassword} = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(422).json({Error:"Input fields Can not be empty"});
    }

    try {
       const userExist = await Register.findOne({email: email})

       if(userExist) {
        return res.status(422).json({error:"Email already Exist"});
    }else if(password != cpassword){
        return res.status(422).json({error:"Password does not match!"});
    }else{
        const register = new Register({name, email, password, cpassword});

        //hashing
        register.password =  await bcrypt.hash(register.password , 12);
        register.cpassword =  await bcrypt.hash(register.cpassword , 12);

        await register.save();
        return res.status(201).json({message:"User registered Successfully"});
        }

    }catch (err) {
        console.log(err);
    }
  
});

//User login authentication 

router.post('/login', async(req,res) =>{
    const { email, password} = req.body;
    if(!email || !password){
         return res.status(400).json({Error:"Please enter email & password !"});
    }

    try {
        const userEmail = await Register.findOne({email: email});
        const userPassword = await Register.findOne({password:password});
        if(userEmail && userPassword){
            return res.status(200).json({message:"Login Successfully!"});
        }else if(!userEmail){
            return res.status(422).json({error:"This email is not registered!"});
        }else if(!userEmail || !userPassword){
            return res.status(422).json({error:"Invalide email and password Combinations"});
        }
  
    } catch (err) {
        console.log(err);
    }

});

module.exports = router; 