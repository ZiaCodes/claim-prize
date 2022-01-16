const express = require('express');
const router = express.Router();
require('../db/config');

const Register = require('../models/register');

router.get('/',(req,res) => {
    res.send(`Hello world from router.js`);
});

router.post('/register',(req,res)=>{

    const { name, email, password, cpassword} = req.body;

    if(!name || !email || !password || !cpassword){
        return res.sendStatus(422).json({Error:"Please fill every field!"}); 
    }

    Register.findOne({email: email})
    .then((userExist) => {
        if(userExist) {
            return res.sendStatus(422).json({error:"Email Already Exist"});
        }
        const register = new Register({name, email, password, cpassword});

        register.save().then(()=>{
            res.sendStatus(201).json({message:"user registered Successfully"});
        }).catch((err) => res.sendStatus(500).json({err:"failed to registered."}));
    }).catch(err => {console.log(err);});

    
});

module.exports = router;