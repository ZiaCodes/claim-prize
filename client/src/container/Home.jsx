import React from "react";
import NavBar from "../components/nav";
import SuperHero from "../assets/home-superhero.svg";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="min-h-screen box-border">
      <NavBar />
      <div className="home-box mt-12 mx-16">
        
        <div className="flex justify-between items-center mt-12 mx-16">
          <div>
            <p className="text-4xl font-semibold">India's <span style={{color:"#FCAF03"}}>First</span></p>
            <p className="text-7xl font-bold mb-2">EARNING</p>
            <p className="text-7xl font-bold mb-2">REWARD</p>
            <p className="text-7xl font-bold mb-6">APPLICATION</p>
            <Link to="/register">
              <button className="sign-up rounded-full text-white text-3xl px-10 py-4">
                SIGN UP
              </button>
            </Link>          
          </div>
          <div>
            <img
              src={SuperHero}
              alt="Superhero with rewards"
              className="w-auto h-[36rem]"
            />
          </div>
        </div>

        <div className="mb-4">
          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-2">

              <a className="social-icons" href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>

              <a className="social-icons" href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>

              <a className="social-icons" href="#">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>

              <a className="social-icons" href="https://github.com/ZiaCodes/claim-prize">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;
