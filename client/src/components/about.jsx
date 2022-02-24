import React, { useEffect, useState } from 'react';
import Navbar from './nav';
import { useNavigate } from 'react-router-dom';
import SessionService from "../services/SessionService";
import "../styles/register.css";
import registrationImg from "../assets/registration_img.png";

const About = () => {
  const navigate = useNavigate();
  // const [name,setName]= useState("User Name");
  // const [email,setEmail]= useState("User Email");
  // const [phone,setPhone]= useState("User Phone");
  // const [address,setAddress]= useState("User Address");
  // const [city,setCity]= useState("User City");
  // const [state,setState]= useState("User State");
  // const [pin, setPin] = useState("User Pincode");

  // const onNameChange = (name) => {  
  //   setName(name);
  // }

  // const onEmailChange = (email) => {
  //   setEmail(email);
  // }

  // const onPhoneChange = (phone) => {
  //   setPhone(phone);
  // }
  // const onAddressChange = (address) => {
  //   setAddress(address);
  // }

  // const onCityChange = (city) => {
  //   setCity(city);
  // }

  // const onStateChange = (state) => {
  //   setState(state);
  // }

  useEffect(() => {
    const token = SessionService.getSession();
    if (!token) {
      navigate("/login")
    }
    // console.log('token', token);
  }, [])

  return <>
    < Navbar />
    <div className="registration">
      <img src={registrationImg} alt="registration" className="registrationImage" />

      <div className="registrationForm">
        <div>
          <h1 className='header'>User Details</h1>
        </div>
        <p className="user-details">
          <i class="fa fa-user" aria-hidden="true"></i> name
        </p>
        <p className="user-details">
          <i class="fa fa-envelope" aria-hidden="true"></i>email
        </p>
        <p className="user-details">
          <i class="fa fa-phone" aria-hidden="true"></i>phone
        </p>
        <p className="user-details">
          <i class="fa fa-address-card" aria-hidden="true"></i>address
        </p>
        <p className="user-details">
          <i class="fa fa-home" aria-hidden="true"></i>city
        </p>
        <p className="user-details">
          <i class="fa fa-location-arrow" aria-hidden="true"></i>state
        </p>
        <p className="user-details">
          <i class="fa fa-map-marker" aria-hidden="true"></i>pin
        </p>
      </div>
    </div>
  </>;
};

export default About;
