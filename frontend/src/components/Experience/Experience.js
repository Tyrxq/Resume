import React from 'react'
import './Experience.css'

const Experience = ({experienceRef}) => {
  return (
    <div className='pt-5'>
      <div ref={experienceRef} id='experience' className='px-5 d-flex justify-content-center'>
        <h3 className='pt-5 display-2'>Experience</h3>
      </div>
      <hr className=' line'></hr>
     <div class="experience px-5 pt-5">
        <h3 className='display-4'>Perficient</h3>
        <h4> Associate Technical Consultant</h4>
        <h5> July 2023 - August 2024 </h5>
        <ul>
          <li>Developed the frontend of an Ecommerce Website using <strong>React</strong>, <strong>Redux</strong>, <strong>Jest</strong> test, and <strong>Bootstrap</strong>.</li>
          <li>Collaborated in an agile methodology with sprints, daily scrum, backlog refinement, and retrospective.</li>
          <li>Efficiently closed user stories, made pull requests, and managed deployment pipelines using <strong>Git</strong>, <strong>Azure DevOps</strong>, and <strong>GitHub</strong>.</li>
          <li>Conducted thorough code reviews and managed pull request approvals and revisions.</li>
        </ul>
     </div>
     <div class="experience px-5 pt-5">
        <h3 className='display-4'>C.A.P.E</h3>
        <h4> Full Stack Manager Intern</h4>
        <h5> November 2022 - May 2023 </h5>
        <ul>
          <li>Designed and developed web and desktop applications along with APIs for Cube Satellites using <strong>ReactJS</strong>, <strong>TypeScript</strong>, <strong>Electron</strong>, <strong>Flask</strong>, and <strong>MySQL</strong>.</li>
          <li>Led a team of frontend and backend interns, ensuring project delivery.</li>
          <li>Deployed applications on <strong>AWS EC2</strong>, ensuring reliable hosting.</li>
          <li>Managed the latest version of production on the git repository with <strong>Bitbucket</strong>.</li>
        </ul>
      </div>
      <div class="experience px-5 pt-5">
        <h3 className='display-4'>BlackHawk Datacom</h3>
        <h4> Defense Engineering Intern</h4>
        <h5> July 2021 - October 2022</h5>
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
