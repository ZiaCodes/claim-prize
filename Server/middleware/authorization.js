const jwt = require('jsonwebtoken');

const Register = require('../models/register');

const authorization = async (req, res, next) => {
    const token = req.cookies.Jwtoken;

    if (!token) {
        return res.status(403).json({ error: "Bad Request !" });
    }
    try {
        const data = await jwt.verify(token, process.env.SECRET_KEY_JWT);
        req.userId = data._id;
        req.token = token;
        return next();
    } catch {
        return res.status(403).json({ error: "Bad Request !" });
    }
};

module.exports = authorization; 