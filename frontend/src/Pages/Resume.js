import React from 'react';
import Home from '../components/Home/Home';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';



const Resume = ({contactRef,portfolioRef,homeRef,resumeRef}) => {
  return (
    <div>
        <div className="row" id="app">
            <div className="col min-vh-100 ">
              <Home homeRef={homeRef}/>
              <Experience experienceRef={resumeRef}/>
              <Projects projectsRef = {portfolioRef}/>
              <Contact contactRef={contactRef}/>
                
            </div>
        </div>
    </div>
  )
}

export default Resume
