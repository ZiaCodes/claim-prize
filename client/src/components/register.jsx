import React ,{ useRef } from 'react';
import "../styles/register.css";
import registration_img from "../assets/registration_img.png";
import Navbar from './nav';
import AuthService from '../services/AuthService';


const Register = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef= useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();

  const registerUser = ()=>{
    const data = {
      name : nameRef.current.value,
      email : emailRef.current.value,
      phoneNumber : phoneNumberRef.current.value,
      password : passwordRef.current.value,
      cpassword : cpasswordRef.current.value}

      AuthService.register(data);
  }
  return <>
  <Navbar /><div className="registration">
        <img src={registration_img} alt="registration"  className="registrationImage" />
      
      <div className="registrationForm">
        <div>
          <h1 className='header'>Register</h1>
        </div>
        <div className="regFormInput">
          <input type="text" placeholder="Name" required="*" className="regUFormInput" ref={nameRef} />
        </div>
        <div className="regFormInput">
          <input type="email" placeholder="Your Email" required="*" className="regUFormInput" ref={emailRef}/>
        </div>
        <div className="regFormInput">
          <input type="text" placeholder="Your Phone Number" className="regUFormInput" ref={phoneNumberRef} />
        </div>
        <div className="regFormInput">
          <input type="password" placeholder="Create a password" required="" className="regUFormInput" ref={passwordRef} />
        </div>
        <div className="regFormInput">
          <input type="password" placeholder="Confirm password" required="" className="regUFormInput" ref={cpasswordRef} />
        </div>
   
        <ul className="regSignin">
          <li><button className="btn" onClick={registerUser} >Sign In</button></li>
          <li><h4 className="or">or</h4></li>
          <li><button className="btn log">login here</button></li>
        </ul>
      </div>
    </div>
    
    </>;
  
};

export default Register;
