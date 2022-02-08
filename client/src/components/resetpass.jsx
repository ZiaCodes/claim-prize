

import React, {useState} from "react";
	
import logo from '../assets/logo512.png'
import Navbar from './nav';
import { Link } from 'react-router-dom';
import AuthService from "../services/AuthService";

const ResetPassword  = (props) => {
    const [password,setPassword] = useState("");
    const [cpassword,setcPassword] = useState("");
    const onPasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const oncPasswordChange = (e) => {
        const cpassword = e.target.value;
        setcPassword(cpassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password ===  cpassword){
          AuthService.resetPassword(password,cpassword).then(
            (response) => {
              console.log(response.data)
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
        }
        
    }

    

    return <div>
        <Navbar/>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div >
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

              <div>
              <label htmlFor="confirm password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="cpassword"
                  name="cpassword"
                  type="cpassword"
                  value={cpassword}
                  onChange={oncPasswordChange}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>

              <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Reset Password
                </button>
                </div>
              </form>
            </div>
        </div>
        </div>
    </div>

}

export default ResetPassword;