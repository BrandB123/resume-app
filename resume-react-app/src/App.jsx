// import { useState } from 'react'
import './App.css'


const MOCKDATA = {
    name: 'John Smith',
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
    }],
    workExperience: [
      {employer: 'employer1', position: 'position1', startDate: '2022', endDate: 'present', summary: 'summary1'},
      {employer: 'employer2', position: 'position2', startDate: '2019', endDate: '2022', summary: 'summary2'},
      {employer: 'employer3', position: 'position3', startDate: '2015', endDate: '2019', summary: 'summary3'}
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
    <div className='sidebar'>
      <PersonalInformationInput />
      <EducationInformationInput />
      <WorkInformationInput />
      <SkillsInput />
    </div>
  );
}


function PersonalInformationInput(){
  return(
    <div className='personalInfoInput'>
      <InputDropdownButton title='Personal Information'/>
      <FormInput label='Name'/>
      <FormInput label='Email'/>
      <FormInput label='Phone'/>
      <FormInput label='Address'/>
    </div>
  );
}


function EducationInformationInput(){
  return(
    <div className='educationInput'>
      <InputDropdownButton title='Education Information'/>
      <FormInput label='School'/>
      <FormInput label='Degree'/>
      <FormInput label='Start Date'/>
      <FormInput label='End Date'/>
      <AddButton />
    </div>
  );
}


function WorkInformationInput(){
  return(
    <div className='employmentInput'>
      <InputDropdownButton title='Employment History'/>
      <FormInput label='Employer'/>
      <FormInput label='Position'/>
      <FormInput label='Start Date'/>
      <FormInput label='End Date'/>
      <FormInput label='Summary of Responsibilities'/>
      <AddButton />
    </div>
  );
}


function SkillsInput(){
  return(
    <div className='skillInput'>
      <InputDropdownButton title='Skills'/>
      <FormInput label='Skill'/>
      <FormInput label='Description'/>
      <AddButton />
    </div>
  );
}


function InputDropdownButton({title, handleClick}){
  return(
    <button onClick={handleClick} className='dropdownButton'>
      {title}
    </button>
  );
}

function FormInput({label, dataField, handleChange}){
  return(
  <form>
    <label htmlFor='{label}' style={{display: 'block'}}>{ label }</label>
    <input id='{label}' onChange={() => handleChange(dataField)}></input>
  </form>
  );
}

function AddButton({handleClick}){
  return(
    <button onClick={handleClick}>
      +
    </button>
  );
}


function Document({ data }){
  return(
    <div className='document'>
      <LeftPanel data = {data}/>
      <RightPanel data = {data}/>
    </div>
  );
}


function LeftPanel({ data }){
  return(
    <div className='leftPanel'>
      <div className='name'>{ data.name }</div>
      <div className='contactInfo'>
        <PersonalInformationSection title='Email:' content={ data.email }/>
        <PersonalInformationSection title='Phone:' content={ data.phone }/>
        <PersonalInformationSection title='Address:' content={ data.address }/>
      </div>
    </div>
  );
}


function RightPanel({data}){
  return(
    <div className='rightPanel' data={data}>
      <HistoryList 
	      data={data.education}
	      heading='Education' 
	      classTitle='education'
      />
      <HistoryList
	      data={data.workExperience}
	      heading='Work Experience'
	      classTitle='workExperience'
      />
      <div className='documentSectionHeading'>
        Skills
        <ul>
          {data.skills.map((skill) => {
            return (
              <li key={skill.title} skill={skill} className='documentSectionContent'>
                <PersonalInformationSection 
                  title={skill.title}
                  content={skill.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


function HistoryList({data, heading, classTitle}){
  return (
    <div className={'documentSectionHeading ' + classTitle}>
      {heading}
      <ul>
        {data.map(historyItem => (
	        classTitle === 'education' ? 
            <EducationHistory key={historyItem.institution} data={historyItem}/> : 
	          <WorkHistory key={historyItem.employer} data={historyItem}/>
        ))}
      </ul>
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


function EducationHistory({data}){
  return(
    <li className='documentSectionContent'>
      <p>{data.institution}</p>
      <p>{data.titleOfStudy}</p>
      <p>{data.startDate} - {data.endDate}</p>
    </li>
  );
}


function WorkHistory({data}){
  return(
    <li className='documentSectionContent'>
	    <p>{data.employer} {data.position}</p>
	    <p>{data.startDate} - {data.endDate}</p>
	    <p>{data.summary}</p>
    </li>
  );
}
