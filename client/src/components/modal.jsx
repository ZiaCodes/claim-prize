import React, {useState} from "react";
import AuthService from "../services/AuthService";
import {useNavigate} from 'react-router-dom';
function Modal({setOpenModal}) {

    const [email,setEmail] = useState("");
    
    let navigate = useNavigate();
    const onEmailChange = (e) => {
        const email = e.target.value;
       // console.log(email)
        setEmail(email);
    }

    

    const getForgotLink = (e) => {
        e.preventDefault();
        AuthService.forgetPassword(email).then(
        (response) => { 
        
          navigate('/resetPassword')
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
       
    };

   
  return (
  <div>
     <div className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50">
        <div className="bg-white rounded p-8 m-8 max-w-xs max-h-full text-center overflow-y-auto">
                <div className="mb-4">
                    <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Reset Password</h1>
                </div>
                <div className="mb-8">
                    <p>Enter your email to reset password you will be redirected to a reset page</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={getForgotLink}>
                  <div className='h-20'>
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
                
                <div className="flex justify-between gap-4">
                 
               
                <button 
                    
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Let's Go
                </button>

                <button 
                    onClick={() => {
                        setOpenModal(false);
                    }}
                    type='button' 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancel
                </button>
                </div>

                </form>
            </div>
        </div>
  </div>
  )
}

export default Modal;