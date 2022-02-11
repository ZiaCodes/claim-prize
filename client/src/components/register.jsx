import React from 'react';
import "../styles/register.css";
import registration_img from "../assets/registration_img.png";
import Navbar from './nav';


const register = () => {
  return <>
  <Navbar /><div className="registration">
        <img src={registration_img} alt="registration"  className="registrationImage" />
      
      <div className="registrationForm">
        <div>
          <h1 className='header'>Register</h1>
        </div>
        <div className="regFormInput">
          <input type="text" placeholder="Name" required="*" className="regUFormInput" />
        </div>
        <div className="regFormInput">
          <input type="email" placeholder="Your Email" required="*" className="regUFormInput" />
        </div>
        <div className="regFormInput">
          <input type="email" placeholder="Your Phone Number" className="regUFormInput" />
        </div>
        <div className="regFormInput">
          <input type="email" placeholder="Create a password" required="" className="regUFormInput" />
        </div>
        <div className="regFormInput">
          <input type="email" placeholder="Confirm password" required="" className="regUFormInput" />
        </div>
   
        <ul className="regSignin">
          <li><button className="btn">Sign In</button></li>
          <li><h4 className="or">or</h4></li>
          <li><button className="btn" className="log">login here</button></li>
        </ul>
      </div>
    </div>
    
    </>;
  
};

export default register;
