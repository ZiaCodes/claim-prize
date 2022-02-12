import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const postLogin = (e) => {
    e.preventDefault();
    AuthService.login(email, password).then(
      (response) => {
        console.log(email);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );
  };

  return (
    <>
      <div>
        <div className="bg">
          <div className="bg-small"></div>
          <div className="bg-large"></div>
        </div>
        <div className="login-nav">
          <h1>CLAIM SWAG</h1>
          <Link class="link" to="/">
            Register
          </Link>
          <Link class="link" to="/login">
            Login
          </Link>
          <Link class="link" to="/about">
            About
          </Link>
          <Link class="link" to="/">
            Home
          </Link>
        </div>

        <div className="main-login">
          <h1>LOGIN</h1>
          <form onSubmit={postLogin}>
            <input
              id="email"
              name="email"
              value={email}
              autoComplete="email"
              onChange={onEmailChange}
              type="email"
              required
              placeholder="Your email or phone"
            />
            <br />
            <input
              id="password"
              name="password"
              value={password}
              onChange={onPasswordChange}
              type="password"
              required
              placeholder="Your Password"
            />
            <br />
            <button>
              <h3>Login</h3>
            </button>
            <p>or</p>
            <Link class="link" to="/Register">
              Create a Account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
