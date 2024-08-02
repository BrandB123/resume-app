import { useState } from 'react'
import './App.css'


export default function App() {
  const [userData, setUserData] = useState({
    name: 'John Smith',
    email: 'johnsmith@email.com',
    phone: '505-500-5005',
    address: '123 N Main St, Smithsville, KS 54321',
    education: [{
      institution: 'University of Example',
      titleOfStudy: 'Bachelor of Arts in Examples',
      startDate: '2020',
      endDate: '2024'
    }],
    workExperience: [{
        employer: 'Example Factory', 
        position: 'Cheif Example Officer', 
        startDate: '2022', endDate: 'present', 
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur dignissimos nostrum expedita in facere ea similique consequatur molestias, ad dolore omnis beatae nobis iste pariatur facilis veritatis. Quibusdam, quos?'
      }],
    skills: [{
        title: 'Examples', 
        description: 'I have mastered the ability to create examples.'
      }]
  })

  const updateState = (inputField, value, keyName, index) => {
    const strings = ['name', 'email', 'phone', 'address'];
    if (!strings.includes(inputField)){
      const updatedArray = userData[inputField][[index]];
      updatedArray[keyName] = value;
      const updatedObject = [ updatedArray ]
      const nextData = {...userData, inputField: updatedObject}
      setUserData(nextData);
    } else {
      const nextUserData = {...userData, [inputField]: value};
      setUserData(nextUserData);
    }
  }
  return (
    <>
      <Sidebar setState = {updateState}/>
      <Document data = { userData }/>
    </>
  )
}


function Sidebar({setState}){
  return(
    <div className='sidebar'>
      <PersonalInformationInput setState = {setState}/>
      <EducationInformationInput setState = {setState}/>
      <WorkInformationInput setState = {setState}/>
      <SkillsInput setState = {setState}/>
    </div>
  );
}


function PersonalInformationInput({setState}){
  return(
    <div className='personalInfoInput'>
      <InputDropdownButton title='Personal Information'/>
      <FormInput label='Name' dataField='name' handleChange={setState} />
      <FormInput label='Email' dataField='email' handleChange={setState} />
      <FormInput label='Phone' dataField='phone' handleChange={setState} />
      <FormInput label='Address' dataField='address' handleChange={setState} />
    </div>
  );
}


function EducationInformationInput({setState}){
  return(
    <div className='educationInput'>
      <InputDropdownButton title='Education Information'/>
      <FormInput label='School' dataField='education' handleChange={setState} keyName='institution' index='0'/>
      <FormInput label='Degree' dataField='education' handleChange={setState} keyName='titleOfStudy' index='0'/>
      <FormInput label='Start Date' dataField='education' handleChange={setState} keyName='startDate' index='0'/>
      <FormInput label='End Date' dataField='education' handleChange={setState} keyName='endDate' index='0'/>
      <AddButton />
    </div>
  );
}


function WorkInformationInput({setState}){
  return(
    <div className='employmentInput'>
      <InputDropdownButton title='Employment History'/>
      <FormInput label='Employer' dataField='workExperience' handleChange={setState} keyName='employer' index='0'/>
      <FormInput label='Position' dataField='workExperience' handleChange={setState} keyName='position' index='0'/>
      <FormInput label='Start Date' dataField='workExperience' handleChange={setState} keyName='startDate' index='0'/>
      <FormInput label='End Date' dataField='workExperience' handleChange={setState} keyName='endDate' index='0'/>
      <FormInput label='Summary of Responsibilities' dataField='workExperience' handleChange={setState} keyName='summary' index='0'/>
      <AddButton />
    </div>
  );
}


function SkillsInput({setState}){
  return(
    <div className='skillInput'>
      <InputDropdownButton title='Skills'/>
      <FormInput label='Skill' dataField='skills' handleChange={setState} keyName='title' index='0'/>
      <FormInput label='Description' dataField='skills' handleChange={setState} keyName='description' index='0'/>
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


function FormInput({label, dataField, handleChange, keyName, index}){
  return(
  <form>
    <label htmlFor={label} style={{display: 'block'}}>{ label }</label>
    <input id={label} onChange={(e) => handleChange(dataField, e.target.value, keyName, index)}></input>
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
