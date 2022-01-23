import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const nav = () => {
  return (
      <div className='flex justify-between shadow-md  '>
          <div>
              <h1 className=' py-5 mx-2 font-bold text-emerald-600 text-xl'>CLAIM <span className='text-zinc-900'>SWAG</span></h1>
          </div>
          <div>
              <ul className='flex'>
                  <li className='font-bold px-5 my-6 text-xl hover:text-gray-500 cursor-pointer'>
                      <Link to='/'>Home</Link>
                  </li>
                  <li className='font-bold px-5 my-6 text-xl hover:text-gray-500 cursor-pointer'>
                  <Link to='/about'>About</Link>
                  </li>
                  <li className='font-bold px-5 my-6 text-xl hover:text-gray-500 cursor-pointer'>
                  <Link to='/login'>Login</Link>
                  </li>
              </ul>
          </div>
      </div>
  );
};

export default nav;
