import React from 'react'
import './Experience.css'

const Experience = ({experienceRef}) => {
  return (
    <div className='pt-5'>
      <div ref={experienceRef} id='resume' className='px-5 d-flex justify-content-start'>
        <h3 className='pt-5 display-3'>Experience</h3>
      </div>
      <hr className='w-25 line'></hr>
     <div>
        <h3>Perficient | July 2023 - August 2024 | Associate Technical Consultant/Frontend Developer</h3>
        <ul className=' justify-content-start'>
          <li>Developed the frontend of an Ecommerce Website using <strong>React</strong>, <strong>Redux</strong>, <strong>Jest</strong> test, and <strong>Bootstrap</strong>.</li>
          <li>Collaborated in an agile methodology with sprints, daily scrum, backlog refinement, and retrospective.</li>
          <li>Efficiently closed user stories, made pull requests, and managed deployment pipelines using <strong>Git</strong>, <strong>Azure DevOps</strong>, and <strong>GitHub</strong>.</li>
          <li>Conducted thorough code reviews and managed pull request approvals and revisions.</li>
        </ul>
     </div>
     <div class="experience">
        <h3>C.A.P.E Satellite Program at the University of Louisiana at Lafayette | November 2022 - May 2023 | Full Stack Manager Intern</h3>
        <ul>
          <li>Designed and developed web and desktop applications along with APIs for Cube Satellites using <strong>ReactJS</strong>, <strong>TypeScript</strong>, <strong>Electron</strong>, <strong>Flask</strong>, and <strong>MySQL</strong>.</li>
          <li>Led a team of frontend and backend interns, ensuring project delivery.</li>
          <li>Deployed applications on <strong>AWS EC2</strong>, ensuring reliable hosting.</li>
          <li>Managed the latest version of production on the git repository with <strong>Bitbucket</strong>.</li>
        </ul>
      </div>
      <div class="experience">
        <h3>BlackHawk Datacom | July 2021 - October 2022 | Defense Engineering/Full Stack Intern</h3>
        <ul>
          <li>Developed and tested applications with <strong>Field Programmable Gate Array (FPGA)</strong> boards on <strong>Radio Frequency Systems</strong>.</li>
          <li>Created software to test Radio Frequency Systems in real time with a complete simulation of air-to-ground radars, capable of being equipped on a plane or anywhere on the ground using <strong>C# .NET WPF</strong>.</li>
          <li>Designed an <strong>Application Programming Interface (API)</strong> for FPGA boards to enable a usable web app using <strong>Node.js</strong>, <strong>MySQL</strong>, and <strong>React.js</strong>.</li>
        </ul>
      </div>

    </div>
  )
}

export default Experience
