const express = require('express');
const dotenv = require("dotenv");
dotenv.config({ path: "./key.env" });
//db 
require('./db/config');
// working with cookies
const cookieParser = require("cookie-parser");
//schema 
const form = require('./models/form');
const register = require('./models/register');

const PORT = process.env.PORT || 8080;
const app = express();


//Middle ware
app.use(express.json());
app.use(cookieParser());

app.use(require('./router/auth'));


app.get("/test", (req, res) => {
    res.send("test page");
});
//port 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});