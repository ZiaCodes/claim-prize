const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim:true
  },
  cpassword: {
    type: String,
    required: true,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  forgetPassword: {
    validTill: {
      type: Date,
    },
    isUsed: { type: Boolean, default: false },
    resetToken: { type: String },
  },
});

//Generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY_JWT);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

// Changing the validity date of reset password link if resetToken changes
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("forgetPassword.resetToken")) {
    // Validate date after 24 hours
    const date = new Date();
    date.setHours(date.getHours() + 24);

    user.forgetPassword.isUsed = false;
    user.forgetPassword.validTill = date;
  }

  if (!user.isModified("password")) {
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
  }

  return next();
});

//model
const Register = mongoose.model("Register", userSchema);
module.exports = Register;
