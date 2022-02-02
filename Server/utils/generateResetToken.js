const crypto = require('crypto')

function generateResetToken() {
    return crypto.randomBytes(32).toString("hex");
}

module.exports = { generateResetToken }