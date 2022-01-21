const express = require('express');
const router = express.Router();
require('../db/config');

const Register = require('../models/register');

router.get('/',(req,res) => {
    res.send(`Hello world from router.js`);
});

//creating a new user 
router.post('/register', async(req,res)=>{

    const { name, email, password, cpassword} = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(422).json({Error:"Please fill every field!"}); 
    }

    try {
       const userExist = await Register.findOne({email: email})

       if(userExist) {
        return res.status(422).json({error:"Email Already Exist"});
    }else if(password != cpassword){
        return res.status(422).json({error:"Password does not match!"});
    }else{
        const register = new Register({name, email, password, cpassword});
        await register.save();
        return res.status(201).json({message:"user registered Successfully"});
        }

    }catch (err) {
        console.log(err);
    }
  
});

module.exports = router;