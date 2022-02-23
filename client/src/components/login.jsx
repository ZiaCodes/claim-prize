import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo512.png'
import Navbar from './nav';
import AuthService from "../services/AuthService";
import Modal from "./modal";

const Login = (props) => {

  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [modalOpen,setModalOpen] = useState(false);


  const onEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  }

  const onPasswordChange = (e) => {
      const password = e.target.value;
      setPassword(password);
  }

  const postLogin = (e) => {
        
        e.preventDefault();
        AuthService.login(email,password).then(
        (response) => {
          
          console.log(response);
          alert("Logged in successfully!");
          navigate('/about');
        },
        (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

              console.log(resMessage);
        });
       
    };

  return <>
    <Navbar />
    
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Claim Prize"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2> 
          </div>
          <form className="mt-8 space-y-6" onSubmit={postLogin} >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={onEmailChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onPasswordChange}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            
 
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
          <div className="button mt-6 flex items-center">
              <button type="button" onClick={()=> {
                setModalOpen(true);
              }} className="text-sm flex-items-center">Forgot Password</button> 

              {modalOpen && <Modal setOpenModal={setModalOpen} />}
             </div>
        </div>
      </div>


    </>;
};

export default Login;
