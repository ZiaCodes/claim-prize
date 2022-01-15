const express = require('express');

const dotenv = require("dotenv");
dotenv.config({path: "./key.env"});
//db 
require('./db/config');

//schema 
const form = require('./models/form');
const register = require('./models/register');

const PORT = process.env.PORT || 8080;
const app = express();

//Middle ware
const check = (req, res, next)=> {
    console.log(`Hello from MiddleWare`);
    next();
}

app.get("/",(req, res) =>{
    res.send("Hello World");
});

app.get("/test", check, (req, res) =>{
    res.send("test page");
});
//port 
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});