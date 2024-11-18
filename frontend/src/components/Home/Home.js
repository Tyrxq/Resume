import React from 'react';
import './Home.css';

const Home = ({homeRef}) => {
  return (
    <div className='home'> 
      <div ref ={homeRef} id ='home' className='container pt-5'>
        <h2  className='display-3'>Hello, I am </h2>
        <h2 className='display-2'>Tyriq Dominguez</h2>
      </div>
              
    </div>
  )
}

export default Home
