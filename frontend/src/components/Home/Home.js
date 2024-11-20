import React from 'react';
import './Home.css';
import myImage from "../Assets/Grad2.jpg";

const Home = ({homeRef}) => {
  return (
    <div className='home pt-5'> 
      <div ref ={homeRef} id ='home' className='container pt-5'>
        <h2  className='display-3'>Hello, I am </h2>
        <h2 className='display-2'>Tyriq Dominguez</h2>
      </div>
      <div className ='container pt-5'>
        <div className = 'trans-card' >
          <img id="pic" src={myImage} alt="Tyriq's Headshot"/> 
         
        </div>
        <div className = 'trans-card card2'>
        <h3>Full</h3>
        </div>
        <div className = 'trans-card card3'>
          <h3>Stack</h3>
        </div>
        <div className = 'trans-card card4'>
          <h3>Developer</h3>
        </div>
       
      </div>
              
    </div>
  )
}

export default Home
