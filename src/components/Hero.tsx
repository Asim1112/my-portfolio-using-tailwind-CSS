import React from 'react';
import Navbar from "./Navbar";

function Hero() {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-cover"
      style={{ backgroundSize: "20%", backgroundPosition: "left 300px top 300px" }}
    >
      <Navbar />
      
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        {/* Profile Picture with Border and Shadow */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-80 h-80 rounded-full shadow-2xl" 
               style={{
                 backgroundImage: "url('/profile3.png')",
                 backgroundSize: "cover",
                 backgroundPosition: "center"
               }}
          ></div>
        </div>
        
        {/* Text Content */}
        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-left">I'm</p>
            <p data-aos="zoom-in-left">Asim</p>
            <p data-aos="zoom-in-left">Hussain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;