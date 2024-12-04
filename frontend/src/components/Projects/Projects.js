import React from 'react'
import './Projects.css'
import myImage from "../Assets/Jojo_project_image.png";

const Projects = ({projectsRef}) => {
  return (
    <div className='pt-5 project-component'>
      <div ref={projectsRef} id='portfolio' className=' pt-5 px-5 d-flex justify-content-center'>
        <h3 className='pt-2 display-2'>Projects</h3>
      </div>
      <hr/>
      <div className='projects-displayed  pt-5 '>
        <div className='project pt-5'>
          <a className='w-50 h-75' href="https://jojostandarrow.com" target='_blank' rel='noreferrer'>
            <span>
              <img className='border w-50 h-50'  src={myImage} alt="Jojo Stand Arrow Project"/> 
            </span>
          </a>
          <div className='d-flex justify-content-center p-5'>
            <p className='pt-5'>
            This project is built using Next.js and the OpenAI API, combining cutting-edge technology to explore the DALL-E and ChatGPT 4 models within one of the latest JavaScript frameworks. Inspired by the iconic anime series JoJo's Bizarre Adventure, 
            it draws from the concept of characters gaining powers manifested as "Stands" when pierced by a mystical arrow. These Stands embody their users' willpower and personalities.
            My website emulates this process by allowing users to input details about themselves. Using this information, the site generates personalized descriptions and images of their unique Stand.
            </p>

          </div>
          

        </div>
        
      </div>
     
    </div>
  )
}

export default Projects
