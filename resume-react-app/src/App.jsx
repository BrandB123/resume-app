import { useState } from 'react'
import './App.css'


const mockData = {

}


export default function App() {

  return (
    <>
      <Sidebar />
      <Document />
    </>
  )
}

function Sidebar(){
  return(
    <div
      className='sidebar'
    >
      <button>Personal Information</button>
      <button>Education</button>
      <button>Work Experience</button>
      <button>Skills</button>
    </div>
  );
}


function Document(){
  return(
    <div
      className='document'
    >
      <div className='leftPanel'>
        <div className='name'>Brandon Bartlett</div>
        <div className='contactInfo'>
          <p>Email: test@testemail.com</p>
          <p>Phone: 555-555-5555</p>
          <p>Address: 123 Test St, City, State 12345</p>
        </div>
        <div className='socialMedia'>
          <p>Github</p>
          <p>LinkedIn</p>
        </div>
      </div>

      <div className='rightPanel'>
        <div className='documentSectionHeading education '>
          Education
          <p className='documentSectionContent'>University of Missouri - Columbia</p>
          <p className='documentSectionContent'><i>BA Political Science</i></p>
          <p className='documentSectionContent'>2017 - 2021</p>
        </div>

        <div className='documentSectionHeading workExperience'>
          Work Experience
          <p className='documentSectionContent'>SuretyBonds.com</p>
          <p className='documentSectionContent'>Web Developer</p>
          <p className='documentSectionContent'>2020 - Present</p>
        </div>

        <div className='documentSectionHeading skills'>
          Skills
          <p className='documentSectionContent'>Web Development:</p>
            <p className='documentSectionContent'>HMTL, CSS, ES6 JavaScript, NPM, React</p>

        </div>
      </div>
    </div>
  );
}
