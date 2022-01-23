import React from 'react';
import NavBar from '../components/nav';

const Home = () => {
  return <>
      <NavBar/>
      <div className='flex flex-col justify-center items-center py-36'>
      <p className='text-3xl'>Welcome to Home</p>

      <p className='my-5 mx-10 text-center '>
        This is a demo page to guide you.
        You need to connect this react application to the Express 
        server which is in the  <br/><strong> server folder </strong>.Go through 
        the folder structure to understand the projects.  </p>

      {/* <p className='my-2 mx-8 '>You also need to configure <strong> key.env </strong> 
      file to work it properly. you will find it in <strong>Server folder</strong> make sure to put your 
       <strong> MONGODB URL</strong> to connect with the mongoDB database as well as <strong> SECRET_KEY_JWT </strong> 
       for generating unique key everytime a user login... </p> */}

       <img src="https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif" alt="gif" />
      </div>
    </>;
};

export default Home;
