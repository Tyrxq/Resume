import React from 'react';
import './Home.css';
import myImage from "../Assets/Grad2.jpg";
import VanillaTilt from 'vanilla-tilt';
import  { useEffect, useRef,} from 'react';

const Home = ({homeRef}) => {



  const tilt = useRef(null);
  const tilt2 = useRef(null);
  const tilt3 = useRef(null);
  const bigTilt = useRef(null);
  
  useEffect(() => {
    const options = {
      reverse:true,
      speed: 200,
      max: 5,
      glare:true
    };
    const options2 = {
      reverse:true,
      speed: 200,
      max: 5
    };
   if(window.innerWidth > 1025 ){
    VanillaTilt.init(bigTilt.current,options)
    VanillaTilt.init(tilt.current, options2);
    VanillaTilt.init(tilt2.current, options2);
    VanillaTilt.init(tilt3.current, options2);
   }
   
  }, []);







  return (
    <div className='home pt-5'> 
      <div ref ={homeRef} id ='home' className='container pt-5'>
        <h2  className='display-2'>Hello, I am </h2>
        <h2 className='display-1'>Tyriq Dominguez</h2>
      </div>
      <div   className ='container pt-5 '>
        <div ref={bigTilt} className="profile">
          <div ref={tilt} className = 'trans-card' >
            <img id="pic" src={myImage} alt="Tyriq's Headshot"/> 
          </div>
          <div  ref={tilt2} className = 'trans-card card2'>
          <h3 className='display-2'>Full</h3>
          </div>
          <div  ref={tilt3} className= 'trans-card card3'>
            <h3 className='display-2'>Stack</h3>
          </div>
        </div>
       
        <div className = 'trans-card card4'>
          <h3 className='display-3'>Developer</h3>
        </div>
      </div>
              
    </div>
  )
}

export default Home
