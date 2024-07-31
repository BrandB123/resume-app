// import { useState } from 'react'
import './App.css'


const MOCKDATA = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@email.com',
    phone: '505-500-5005',
    address: '916 N Jefferson St, Carrollton, Mo 64633',
    socialMedia: {
      github: 'brandb123',
      linkedIn: 'johnSmith2024'
    },
    education: [{
      institution: 'University of Testing',
      titleOfStudy: 'Bachelors of Arts in Fake Data',
      startDate: '2017',
      endDate: '2021',
      id: '1'
    }],
    workExperience: [
      {employer: 'employer1', position: 'position1', startDate: '2022', endDate: 'present', id: '1'},
      {employer: 'employer2', position: 'position2', startDate: '2019', endDate: '2022', id: '2'},
      {employer: 'employer3', position: 'position3', startDate: '2015', endDate: '2019', id: '3'}
    ],
    skills: [
      {title: 'Web Development', description: 'Proficient in HMTL, CSS, Javascript, Sveltekit, TypeScript, Express'},
      {title: 'Communication', description: 'I can talk with people good :)'}
    ]
}


export default function App({ data = {MOCKDATA} }) {

  return (
    <>
      <Sidebar />
      <Document data = { data.MOCKDATA }/>
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


function Document({ data }){
  return(
    <div
      className='document'
    >
      <LeftPanel data = {data}/>

      <div className='rightPanel'>
        <div className='documentSectionHeading education'>
          Education
          <p className='documentSectionContent'>{data.education.institution}</p>
          <p className='documentSectionContent'><i>{data.education.titleOfStudy}</i></p>
          <p className='documentSectionContent'>{data.education.startDate} - {data.education.endDate}</p>
        </div>

        <div className='documentSectionHeading workExperience'>
          Work Experience
          <p className='documentSectionContent'>Not filled</p>
          <p className='documentSectionContent'>Not filled</p>
          <p className='documentSectionContent'>Not filled</p>
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


function LeftPanel({ data }){
  return(
    <div className='leftPanel'>
      <div className='name'>{ data.firstName + " " + data.lastName }</div>
      <div className='contactInfo'>
        <PersonalInformationSection title='Email:' content={ data.email }/>
        <PersonalInformationSection title='Phone:' content={ data.phone }/>
        <PersonalInformationSection title='Address:' content={ data.address }/>
      </div>
      <div className='socialMedia'>
        <PersonalInformationSection title='Github:' content={ data.socialMedia.github }/>
        <PersonalInformationSection title='LinkedIn:' content={ data.socialMedia.linkedIn }/>
      </div>
    </div>
  );
}


function RightPanel({ data }){
  return(
    <div className='rightPanel'>
        <div className='documentSectionHeading education '>
          Education
          <p className='documentSectionContent'>{data.education.institution}</p>
          <p className='documentSectionContent'><i>{data.education.titleOfStudy}</i></p>
          <p className='documentSectionContent'>{data.education.startDate} - {data.education.endDate}</p>
        </div>

        <div className='documentSectionHeading workExperience'>
          Work Experience
          <p className='documentSectionContent'>Not filled</p>
          <p className='documentSectionContent'>Not filled</p>
          <p className='documentSectionContent'>Not filled</p>
        </div>


        <div className='documentSectionHeading skills'>
          Skills
          <p className='documentSectionContent'>Web Development:</p>
            <p className='documentSectionContent'>HMTL, CSS, ES6 JavaScript, NPM, React</p>

        </div>
      </div>
  );
}


function PersonalInformationSection({title, content}){
  return(
    <div className='informationSection'>
      <p className='title'>{ title }</p>
      <p className='content'>{ content }</p>
    </div>
  );
}

function educationInformation(){
  return(
    null
  );
}

function workExperienceInformation(){
  return(
    null
  );
}