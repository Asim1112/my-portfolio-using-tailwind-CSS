import React from 'react'
import Navbar from "./Navbar";

function Hero() {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/profile3.png)]  bg-cover"
    style={{backgroundSize: "20%", backgroundPosition: "left 300px top 300px"}}
    >
      <Navbar />
        
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">I'm</p>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Asim</p>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Hussain</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;