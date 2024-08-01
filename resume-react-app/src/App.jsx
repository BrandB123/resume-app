import { useState } from 'react'
import './App.css'


// const MOCKDATA = {
//     name: 'John Smith',
//     email: 'johnsmith@email.com',
//     phone: '505-500-5005',
//     address: '916 N Jefferson St, Carrollton, Mo 64633',
//     socialMedia: {
//       github: 'brandb123',
//       linkedIn: 'johnSmith2024'
//     },
//     education: [{
//       institution: 'University of Testing',
//       titleOfStudy: 'Bachelors of Arts in Fake Data',
//       startDate: '2017',
//       endDate: '2021',
//     }],
//     workExperience: [
//       {employer: 'employer1', position: 'position1', startDate: '2022', endDate: 'present', summary: 'summary1'},
//       {employer: 'employer2', position: 'position2', startDate: '2019', endDate: '2022', summary: 'summary2'},
//       {employer: 'employer3', position: 'position3', startDate: '2015', endDate: '2019', summary: 'summary3'}
//     ],
//     skills: [
//       {title: 'Web Development', description: 'Proficient in HMTL, CSS, Javascript, Sveltekit, TypeScript, Express'},
//       {title: 'Communication', description: 'I can talk with people good :)'}
//     ]
// }


export default function App() {
  const [userData, setUserData] = useState({
    name: 'John Smith',
    email: 'johnsmith@email.com',
    phone: '505-500-5005',
    address: '123 N Main St, Smithsville, KS 54321',
    education: [{
      institution: 'University of Example',
      titleOfStudy: 'Bachelors of Arts in Examples',
      startDate: '1900',
      endDate: '2000',
    }],
    workExperience: [
      {employer: 'Example Factory', position: 'Cheif Example Officer', startDate: '2022', endDate: 'present', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur dignissimos nostrum expedita in facere ea similique consequatur molestias, ad dolore omnis beatae nobis iste pariatur facilis veritatis. Quibusdam, quos?'}
    ],
    skills: [
      {title: 'Examples', description: 'I have mastered the ability to create examples.'}
    ]
  })

  const updateState = (inputField, value, index) => {
    // handle string or array
    const strings = ['name', 'email', 'phone', 'address'];
    if (!strings.includes(inputField)){
      const newArray = userData[inputField].map((arr, idx) => 
        idx === index ? { ...arr, ...value } : arr
      );
      setUserData({ ...userData, inputField: newArray });
    } else {
      console.log(userData)
      const nextUserData = {...userData, [inputField]: value};
      console.log(nextUserData);
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
      <FormInput label='Name' dataField='name' handleChange={setState}/>
      <FormInput label='Email' dataField='email' handleChange={setState}/>
      <FormInput label='Phone' dataField='phone' handleChange={setState}/>
      <FormInput label='Address' dataField='address' handleChange={setState}/>
    </div>
  );
}


function EducationInformationInput({setState}){
  return(
    <div className='educationInput'>
      <InputDropdownButton title='Education Information'/>
      <FormInput label='School' dataField='education' handleChange={setState} index='0'/>
      <FormInput label='Degree' dataField='titleOfStudy' handleChange={setState}/>
      <FormInput label='Start Date' dataField='startDate' handleChange={setState}/>
      <FormInput label='End Date' dataField='endDate' handleChange={setState}/>
      <AddButton />
    </div>
  );
}


function WorkInformationInput({setState}){
  return(
    <div className='employmentInput'>
      <InputDropdownButton title='Employment History'/>
      <FormInput label='Employer' dataField='employer' handleChange={setState}/>
      <FormInput label='Position' dataField='position' handleChange={setState}/>
      <FormInput label='Start Date' dataField='startDate' handleChange={setState}/>
      <FormInput label='End Date' dataField='endDate' handleChange={setState}/>
      <FormInput label='Summary of Responsibilities' dataField='summary' handleChange={setState}/>
      <AddButton />
    </div>
  );
}


function SkillsInput({setState}){
  return(
    <div className='skillInput'>
      <InputDropdownButton title='Skills'/>
      <FormInput label='Skill' dataField='title' handleChange={setState}/>
      <FormInput label='Description' dataField='content' handleChange={setState}/>
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

function FormInput({label, dataField, handleChange, index}){
  return(
  <form>
    <label htmlFor={label} style={{display: 'block'}}>{ label }</label>
    <input id={label} onChange={(e) => handleChange(dataField, e.target.value, index)}></input>
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
