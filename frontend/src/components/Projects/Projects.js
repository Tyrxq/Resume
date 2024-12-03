import React from 'react'
import './Projects.css'

const Projects = ({projectsRef}) => {
  return (
    <div className='pt-5 project-component'>
      <div ref={projectsRef} id='portfolio' className='px-5 d-flex justify-content-center'>
        <h3 className='pt-2 display-2'>Projects</h3>
      </div>
      <hr/>
      <div className='projects-displayed pt-5'>
        <a href="https://jojostandarrow.com" target='_blank' rel='noreferrer'>
          JojoStandArrow
        </a>
      </div>
    </div>
  )
}

export default Projects
