const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const {sendWelcomeEmail} = require('../emails/welcome');
const authorization = require('../middleware/authorization');
require("../db/config");


const Register = require("../models/register");
const { generateResetToken } = require("../utils/generateResetToken");

router.get("/", (req, res) => {
    res.send(`Hello world from router.js`);
});

//creating a new user
router.post("/register", async (req, res) => {
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ Error: "Input fields Can not be empty" });
    }

    try {
        const userExist = await Register.findOne({ email: email });

       if(userExist) {
        return res.status(422).json({error:"Email already Exist"});
    }else if(password != cpassword){
        return res.status(422).json({error:"Password does not match!"});
    }else{
        const register = new Register({name, email, password, cpassword});
        sendWelcomeEmail(email,name);
        //hashing
        register.password =  await bcrypt.hash(register.password , 12);
        register.cpassword =  await bcrypt.hash(register.cpassword , 12);

       

            //hashing
            //   register.password = await bcrypt.hash(register.password, 12);
            //   register.cpassword = await bcrypt.hash(register.cpassword, 12);


            await register.save();
            return res.status(201).json({ message: "User registered Successfully" });
        }
    } catch (err) {
        console.log(err);
    }
});

//User login authentication

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ Error: "Please enter email & password !" });
    }

    try {
        const userEmail = await Register.findOne({ email: email });

        if (userEmail) {
            const isMatch = await bcrypt.compare(password, userEmail.password);

            const token = await userEmail.generateAuthToken();
            console.log(token);
            res.cookie("Jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
            });

            if (!isMatch) {
                return res
                    .status(422)
                    .json({ error: "Invalid password! please try again." });
            } else {
                return res.status(200).json({ message: "Login Successfully!" });
            }
        } else {
            return res.status(422).json({
                error: "Invalid Email and Password Combination,Please try agin !",
            });
        }
    } catch (err) {
        console.log(err);
    }
});

//Send  Forget Password Link
router.post("/forgetPassword", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ Error: "Input fields Can not be empty" });
    }
    const user = await Register.findOne({ email });

    if (!user) {
        return res.sendStatus(404).json({ Error: "User is not in out database" });
    }

    let resetToken = generateResetToken();

    user.forgetPassword.resetToken = resetToken;

    await user.save();

    const resetLink = `http://localhost:5000/resetPassword/${user.id}/${resetToken}`;

    return res.send(resetLink);
});

// Reset the password
router.post("/resetPassword/:userId/:resetToken", async (req, res) => {
    const { userId, resetToken } = req.params;
    const { password, cpassword } = req.body;
    const user = await Register.findById(userId);

    if (password != cpassword) {
        return res.status(422).json({ error: "Password does not match!" });
    }

    //   Checking if user exist
    if (!user) {
        return res.status(404).json({ Error: "Invalid Token" });
    }

    //   Match the reset token send by user to the reset token available in database
    if (user.forgetPassword.resetToken !== resetToken) {
        console.log(resetToken, user.forgetPassword.resetToken);
        return res.status(404).json({ Error: "Invaid Reset Link" });
    }
    const { isUsed, validTill } = user.forgetPassword;

    const currentDate = new Date();
    const validDate = new Date(validTill);

    //   Checking the validity date and isUsed
    if (isUsed) {
        return res.status(400).json({ Error: "Link alread used" });
    }

    if (currentDate >= validDate) {
        return res.status(404).json({ Error: "Reset Link expired" });
    }

    //   Reset the password
    user.password = password;
    //   Resetoken is used
    user.forgetPassword.isUsed = true;

    await user.save();

    return res.sendStatus(200);
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
