const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authorization = require("../middleware/authorization");
require('../db/config');

const Register = require('../models/register');

router.get('/', (req, res) => {
    res.send(`Hello world from router.js`);
});



//creating a new user 
router.post('/register', async (req, res) => {

    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ Error: "Input fields Can not be empty" });
    }

    try {
        const userExist = await Register.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password does not match!" });
        } else {
            const register = new Register({ name, email, password, cpassword });

            //hashing
            register.password = await bcrypt.hash(register.password, 12);
            register.cpassword = await bcrypt.hash(register.cpassword, 12);

            await register.save();
            return res.status(201).json({ message: "User registered Successfully" });
        }

    } catch (err) {
        console.log(err);
    }

});

//User login authentication 

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ Error: "Please enter email & password !" });
    }

    try {
        const userEmail = await Register.findOne({ email: email });

        if (userEmail) {

            const isMatch = await bcrypt.compare(password, userEmail.password);

            const token = await userEmail.generateAuthToken();
            // console.log(token);
            res.cookie("Jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                return res.status(422).json({ error: "Invalid password! please try again." });
            } else {
                return res.status(200).json({ message: "Login Successfully!" });
            }
        } else {
            return res.status(422).json({ error: "Invalid Email and Password Combination,Please try agin !" });
        }

    } catch (err) {
        console.log(err);
    }

});

// logout functionality

router.get('/signout', authorization, async (req, res) => {
    try {
        const user = await Register.findOne({ _id: req.userId });
        user.tokens = user.tokens.filter((item) => item.token != req.token);
        await user.save();

        res.clearCookie("Jwtoken");
        return res.status(200).json({ message: "Successfully logged out" });
    } catch (error) {
        return res.status(422).json({ error });
    }
});

module.exports = router; 