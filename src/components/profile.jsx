import React from 'react'
import MainPage from './mainPage'
import { faCamera,faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/profile.css'
import { useState,useRef } from 'react';

function Profile() {

  var picture = document.getElementById('picture');
  var camera = document.getElementById('camera');
  var fileInput = document.getElementById('fileInput');
  var coverphoto = document.getElementsByClassName('cover-photo')
  var skil = document.getElementById('skil')

  const [selectedResumeFile, setSelectedResumeFile] = useState(null);
  const [selectedCVFile, setSelectedCVFile] = useState(null);
  const [username, setUsername] = useState('John Doe');
  const [userposition, setUserPosition] = useState('Developer');
  const [useraddress, setAddress] = useState('Rwp, Pakistan');
  const [useremail, setEmail] = useState('abd@gmail.com');
  const [profilePicture, setProfilePicture] = useState('');

  const profileRef = useRef(null)

  function handleUsername(event){
    setUsername(event.target.value)
  }

  function editname()
  {
  const nameInput = document.getElementById('name');
  nameInput.disabled = !nameInput.disabled;
  if(nameInput.disabled)
  {
  nameInput.style.border = '1px solid white'
  nameInput.style.backgroundColor = 'white'

  }else{

    nameInput.setSelectionRange(nameInput.value.length, nameInput.value.length);
    nameInput.focus()
    nameInput.style.backgroundColor = 'lightgray'
  }

  nameInput.addEventListener('blur', function () {
    nameInput.style.backgroundColor = 'white';
    nameInput.disabled = true
  });
  }

  function handleUserPosition(event){
    setUserPosition(event.target.value)
  }

  function editposition()
  {
  const position = document.getElementById('position');
  position.disabled = !position.disabled;
  if(position.disabled)
  {
  position.style.border = '1px solid white'
  position.style.backgroundColor = 'white'
  position.style.color = 'black'

  }else{
    position.setSelectionRange(position.value.length, position.value.length);
    position.focus()
    position.style.backgroundColor = 'lightgray'
  }
  position.addEventListener('blur', function () {
    position.style.backgroundColor = 'white';
    position.disabled = true
  });
  }

  function handleAddress(event){
    setAddress(event.target.value)
  }

  function editaddress()
  {
  const address = document.getElementById('address');
  address.disabled = !address.disabled;
  if(address.disabled)
  {
  address.style.border = '1px solid white'
  address.style.backgroundColor = 'white'

  }else{

    address.setSelectionRange(address.value.length, address.value.length);
    address.focus()
    address.style.backgroundColor = 'lightgray'
  }
  address.addEventListener('blur', function () {
    address.style.backgroundColor = 'white';
    address.disabled = true
  });
  }

  function handleEmail(event){
    setEmail(event.target.value)
  }

  function editemail() 
  {
  const email = document.getElementById('email');

  email.disabled = !email.disabled;
  if(email.disabled=== true)
  {
  email.style.border = '1px solid white'
  email.style.backgroundColor = 'white'

  }else{

    email.setSelectionRange(email.value.length, email.value.length);
    email.focus()
    email.style.backgroundColor = 'lightgray'
  }
  email.addEventListener('blur', function () {
    email.style.backgroundColor = 'white';
    email.disabled =true
  });
  }

  const handleResumeFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedResumeFile(file);

    // You can also perform additional actions here, such as file validation
  };

  const handleCVFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedCVFile(file);

    // You can also perform additional actions here, such as file validation
  };

  function newEducation(){
    const newDiv = document.createElement('div');
    newDiv.className = 'experience_block'

    const upperDiv = document.createElement('div')
    const lowerDiv = document.createElement('div')

    upperDiv.style.width = '98.2%'

  
    const degree = document.createElement('input');
    const uni = document.createElement('input');
    const okDiv = document.createElement('span')
    const editDiv = document.createElement('span')
    const delDiv = document.createElement('span')


    degree.type = 'text'
    uni.type = 'text'

    degree.className = 'inputs experience_inp'
    uni.className = 'inputs experience_inp'

    degree.placeholder = 'Department Name'
    uni.placeholder = 'Degree Name'

    okDiv.textContent = '\u2713'
    okDiv.style.fontSize = '22.5px'
    okDiv.style.fontWeight = '30px'
    okDiv.className = 'ok_tick'


    editDiv.textContent = '\u2710'
    editDiv.style.fontSize = '22.5px'
    editDiv.style.fontWeight = '30px'
    editDiv.className = 'edit_pen'
    editDiv.style.display = 'none'

    delDiv.textContent = '\u2716'
    delDiv.style.fontSize = '22.5px'
    delDiv.style.fontWeight = '30px'
    okDiv.id = 'delete_experience'
    delDiv.className = 'skildel'

    upperDiv.appendChild(degree);
    upperDiv.appendChild(uni);

    lowerDiv.appendChild(okDiv);
    lowerDiv.appendChild(editDiv);
    lowerDiv.appendChild(delDiv);

    newDiv.appendChild(upperDiv);
    newDiv.appendChild(lowerDiv);
  
    // Append the new div to the container
    const container = document.getElementById('education');

    container.appendChild(newDiv);

    okDiv.addEventListener('click', function () {

      if(degree.value === '' || uni.value === '')
      {
         if(degree.value === '')
         {
          degree.placeholder = 'Cannot left empty'
          degree.className = 'inputs experience_inp red'
         }
         
        else if( uni.value === '')
         {
          uni.placeholder = 'Cannot left empty'
          uni.className = 'inputs experience_inp red'
         }
      }
      else{
      editDiv.style.display = 'block'
      okDiv.style.display = 'none'
      
      degree.style.backgroundColor = 'white';
      degree.disabled = true
      degree.style.fontWeight = 'bold'

      uni.style.backgroundColor = 'white';
      uni.disabled = true

      uni.style.marginTop = '0%'
      degree.style.fontStyle = 'italic'
      }

  });

    editDiv.addEventListener('click', function () {
      editDiv.style.display = 'none'
      okDiv.style.display = 'block'

      degree.style.backgroundColor = 'rgb(226, 226, 226)';
      degree.disabled = false
      degree.style.fontWeight = 'normal'

      uni.style.backgroundColor = 'rgb(226, 226, 226)';
      uni.disabled = false

      uni.style.marginTop = '1%'
      degree.style.fontStyle = 'normal'
  });

    delDiv.addEventListener('click', function () {
      newDiv.style.display = 'none'
  });
  }
    
  function newExperience(){
    const newDiv = document.createElement('div');
    newDiv.className = 'experience_block'

    const upperDiv = document.createElement('div')
    const lowerDiv = document.createElement('div')
    
    upperDiv.style.width = '98.2%'

    const company = document.createElement('input');
    const spec = document.createElement('input');
    const post = document.createElement('input');
    const okDiv = document.createElement('span')
    const editDiv = document.createElement('span')
    const delDiv = document.createElement('span')


    company.type = 'text'
    spec.type = 'text'
    post.type = 'text'

    company.className = 'inputs experience_inp'
    spec.className = 'inputs experience_inp'
    post.className = 'inputs experience_inp'

    company.placeholder = 'Company Name'
    spec.placeholder = 'Specialization (Developer etc)'
    post.placeholder = 'Post (Employee, Manager, Internee etc)'

    okDiv.textContent = '\u2713'
    okDiv.style.fontSize = '22.5px'
    okDiv.style.fontWeight = '30px'
    okDiv.className = 'ok_tick'


    editDiv.textContent = '\u2710'
    editDiv.style.fontSize = '22.5px'
    editDiv.style.fontWeight = '30px'
    editDiv.className = 'edit_pen'
    editDiv.style.display = 'none'

    delDiv.textContent = '\u2716'
    delDiv.style.fontSize = '22.5px'
    delDiv.style.fontWeight = '30px'
    okDiv.id = 'delete_experience'
    delDiv.className = 'skildel'

    upperDiv.appendChild(company);
    upperDiv.appendChild(spec);
    upperDiv.appendChild(post);

    lowerDiv.appendChild(okDiv);
    lowerDiv.appendChild(editDiv);
    lowerDiv.appendChild(delDiv);

    newDiv.appendChild(upperDiv);
    newDiv.appendChild(lowerDiv);
  
    // Append the new div to the container
    const container = document.getElementById('experience');

    container.appendChild(newDiv);

    newDiv.addEventListener('blur', function () {
      company.style.backgroundColor = 'white';
      company.style.fontWeight = 'bold';

      spec.style.backgroundColor = 'white';
      post.style.backgroundColor = 'white';

    });

    okDiv.addEventListener('click', function () {

      if(company.value === ''){
        company.placeholder ='Cannot left empty'
        company.className ='inputs experience_inp red'
      }
      else if(spec.value ==='')
      {
        spec.placeholder ='Cannot left empty'
        spec.className ='inputs experience_inp red'
      }
      else if(post.value === '')
      {
        post.placeholder ='Cannot left empty'
        post.className ='inputs experience_inp red'
      }
      else{
      editDiv.style.display = 'block'
      okDiv.style.display = 'none'
      
      company.style.backgroundColor = 'white';
      company.disabled = true
      company.style.fontWeight = 'bold'

      spec.style.backgroundColor = 'white';
      spec.disabled = true

      spec.style.marginTop = '0%'
      post.style.marginTop = '0%'

      post.style.backgroundColor = 'white';
      post.disabled = true
    }

  });

    editDiv.addEventListener('click', function () {
      editDiv.style.display = 'none'
      okDiv.style.display = 'block'

      company.style.backgroundColor = 'rgb(226, 226, 226)';
      company.disabled = false
      company.style.fontWeight = 'normal'

      spec.style.backgroundColor = 'rgb(226, 226, 226)';
      spec.disabled = false

      post.style.backgroundColor = 'rgb(226, 226, 226)';
      post.disabled = false

      spec.style.marginTop = '1%'
      post.style.marginTop = '1%'
  });

    delDiv.addEventListener('click', function () {
      newDiv.style.display = 'none'
  });
    
  }

  function newSkill() {
    const newDiv = document.createElement('h6');
    const newSkill = document.createElement('input');
    const skil = document.getElementById('skil')
    const delDiv = document.createElement('span')
    let x = 1

    newDiv.id = x
    x++
    newDiv.style.width = '100%'
    newDiv.style.border = '4px solid white'

    newSkill.type = 'text';
    newSkill.id = 'newskill';
    newSkill.placeholder = '+ Add Skill';
    newSkill.className = 'inputs'

    delDiv.textContent = '\u2716'
    
    delDiv.id = 'delete_skill'
    delDiv.className = 'skildel'

    skil.style.backgroundColor = 'white';
    newDiv.appendChild(newSkill);
    newDiv.appendChild(delDiv);

  
    // Append the new div to the container
    const container = document.getElementById('skills');
  
    container.appendChild(newDiv);
  
    // Attach a blur event listener to the input field
    newSkill.addEventListener('blur', function () {
      newSkill.style.backgroundColor = 'white';
      newSkill.style.border = '1px solid white';
      newSkill.disabled = true
    });
    delDiv.addEventListener('click', function () {
        newDiv.style.display = 'none'
    });
  }

  function delete_first_skill(){
    var first_skill = document.getElementById('first_skill')
    first_skill.style.display = 'none';
  }

  function ok_first_experience(){
      const tick = document.getElementById('ok_first_experience');
      const edit = document.getElementById('edit_first_experience');
      const cross = document.getElementById('delete_first_experience');

      const company = document.getElementById('company');
      const spec = document.getElementById('spec');
      const post = document.getElementById('post');

      

      if(company.value === ''){
        company.placeholder ='Cannot left empty'
        company.className ='inputs experience_inp red'
      }
      else if(spec.value ==='')
      {
        spec.placeholder ='Cannot left empty'
        spec.className ='inputs experience_inp red'
      }
      else if(post.value === '')
      {
        post.placeholder ='Cannot left empty'
        post.className ='inputs experience_inp red'
      }
      else{

      tick.style.display = 'none'
      edit.style.display = 'inline'
      cross.style.display = 'block'

      company.style.backgroundColor = 'white'
      company.style.fontWeight = 'bold'
      spec.style.backgroundColor = 'white'
      post.style.backgroundColor = 'white'
      spec.style.marginTop = '0%'
      post.style.marginTop = '0%'

      company.style.color = 'black'
      spec.style.color = 'black'
      post.style.color = 'black'



      company.disabled = true
      spec.disabled = true
      post.disabled = true
      }

  }

  function edit_first_experience(){
    const tick = document.getElementById('ok_first_experience');
    const edit = document.getElementById('edit_first_experience');
    const cross = document.getElementById('delete_first_experience');

    const company = document.getElementById('company');
    const spec = document.getElementById('spec');
    const post = document.getElementById('post');

    tick.style.display = 'block'
    edit.style.display = 'none'
    cross.style.display = 'block'

    company.style.backgroundColor = 'rgb(226, 226, 226)'
    company.style.fontWeight = 'normal'
    spec.style.backgroundColor = 'rgb(226, 226, 226)'
    post.style.backgroundColor = 'rgb(226, 226, 226)'

    spec.style.marginTop = '1%'
    post.style.marginTop = '1%'

    company.disabled = false
    spec.disabled = false
    post.disabled = false
  }

  function delete_first_experience(){
    var first_experience = document.getElementById('first_experience_block')
    first_experience.style.display = 'none';
  }

  function ok_first_education(){
      const tick = document.getElementById('ok_first_education');
      const edit = document.getElementById('edit_first_education');
      const cross = document.getElementById('delete_first_education');

      const degree = document.getElementById('degree');
      const uni = document.getElementById('uni');

      if(degree.value === '' || uni.value === '')
      {
         if(degree.value === '')
         {
          degree.placeholder = 'Cannot left empty'
          degree.className = 'inputs edu_inps red'
         }
         
        else if( uni.value === '')
         {
          uni.placeholder = 'Cannot left empty'
          uni.className = 'inputs edu_inps red'
         }
      }
      else{
        tick.style.display = 'none'
        edit.style.display = 'inline'
        cross.style.display = 'block'

        degree.style.backgroundColor = 'white'
        degree.style.fontWeight = 'bold'
        uni.style.backgroundColor = 'white'

        degree.disabled = true
        uni.disabled = true

        uni.style.marginTop = '0%'
        degree.style.fontStyle = 'italic'
      }

  }

  function edit_first_education(){
    const tick = document.getElementById('ok_first_education');
    const edit = document.getElementById('edit_first_education');
    const cross = document.getElementById('delete_first_education');

    const degree = document.getElementById('degree');
    const uni = document.getElementById('uni');

    tick.style.display = 'block'
    edit.style.display = 'none'
    cross.style.display = 'block'

    degree.style.backgroundColor = 'rgb(226, 226, 226)'
    degree.style.fontWeight = 'normal'
    uni.style.backgroundColor = 'rgb(226, 226, 226)'

    degree.disabled = false
    uni.disabled = false

    uni.style.marginTop = '1%'
    degree.style.fontStyle = 'normal'
  }

  function delete_first_education(){
    var first_education = document.getElementById('first_education_block')
    first_education.style.display = 'none';
  }

  function profilePhoto(){
    profileRef.current.click()
  }

  function handleProfilePic(e){

    const selectedFile = e.target.files[0];

      

    const upload_text = document.getElementById('upload_text')
    upload_text.style.display = 'none'

    const camera = document.getElementById('camera')
    camera.style.display = 'none'


    if (selectedFile) {
      const reader = new FileReader();
      const picture = document.getElementById('picture')

      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
        picture.innerHTML = ''; 
        
        picture.style.background ='none';
        img.style.height ='150px';
        img.style.width ='150px';
        img.style.borderRadius = '50%';
        img.style.marginTop = '-3%'
        img.style.marginLeft = '-3%'
        img.style.border = '4px solid white'

        picture.appendChild(img);
      };

      reader.readAsDataURL(selectedFile);
    }
  }

  if(picture && camera && fileInput && coverphoto && skil ) {

    picture.addEventListener('mouseover', function() {
      camera.style.fontSize = '20px'; 
      camera.style.marginTop = '45px'; 
      picture.style.fontSize = '16px'; 
      camera.style.transition = '0.2s';
    });
    
    picture.addEventListener('mouseout', function() {
      camera.style.fontSize = '15px';
      camera.style.marginTop = '50px'; 
      picture.style.fontSize = '15px'; 
      camera.style.transition = '0.2s';

    });  

    picture.addEventListener('click', function() {
      fileInput.click(); 
    });
  

    skil.addEventListener('blur', function () {
      skil.style.backgroundColor = 'white';
      skil.disabled =true
    });
  }


  return (
    <>
      <MainPage message={'profile'}/>
      <div id="profile-section">     
        <div id="cover-photo"><div id="cover-camera"><FontAwesomeIcon  icon={faCamera} /></div></div>
        <div className='profileinfo' id="basicinfo"> 
          <div id='picture' onClick={profilePhoto}>
            <input type="file" name='fileInput' id="fileInput" onChange={handleProfilePic} style={{display : 'none'}} ref={profileRef}/>
            <div className='profilepic' id="camera"><FontAwesomeIcon  icon={faCamera} /></div>
            <div className='profilepic' id='upload_text'>Upload Photo</div>
          </div> 
        
        
        <div className='pen_in_flex'><input type="text" name="name" id="name" className='all_inputs' value={username} onChange={handleUsername} disabled={false} /><FontAwesomeIcon className='pen' onClick={editname} icon={faPen} /></div><div className='pen_in_flex'><input type="text" name="position" id="position" className='all_inputs' value={userposition} onChange={handleUserPosition} disabled={false} /><FontAwesomeIcon className='pen' onClick={editposition} icon={faPen} /></div><div className='pen_in_flex'><input type="address" name="address" id="address" className='all_inputs' value={useraddress} onChange={handleAddress} disabled={false} /><FontAwesomeIcon className='pen' onClick={editaddress} icon={faPen} /></div><div className='pen_in_flex'><input type="text" name="email" id="email" className='all_inputs' value={useremail} onChange={handleEmail} disabled={false} /><FontAwesomeIcon className='pen' onClick={editemail} icon={faPen} /></div></div>
        
        
        <div className='profileinfo' id="education"><h4>Education</h4><h1 className='plus' id='new_education' onClick={newEducation}>+</h1>
          
          <div id='first_education_block' className="experience_block">
            <div style={{width : '98.2%'}}>
              <input type="text" name="degree" id="degree" placeholder='Department Name' className='inputs edu_inps'/>
              <input type="text" name="uni" id="uni" placeholder='Institue Name' className='inputs edu_inps'/>
            </div>

            <div>
                <div id='ok_first_education' className="ok_tick" onClick={ok_first_education}>&#x2713;</div>
                <div id='edit_first_education' className="edit_pen" onClick={edit_first_education}>&#x2710;</div>
                <div id='delete_first_education' className="skildel" onClick={delete_first_education}>&#x2716;</div>
            </div>

          </div>
        </div>
        <div className='profileinfo' id="experience"><h4>Experience</h4><h1 className='plus' onClick={newExperience}>+</h1>
        
        <div id='first_experience_block' className='experience_block'>
            <div style={{width : '98.2%'}}>
              <input type="text" id='company' name="company" className='inputs experience_inp' placeholder='Company Name'/>
              <input type="text" id='spec' name="spec" className='inputs experience_inp' placeholder='Specialization (Developer etc)'/>
              <input type="text" id='post' name="post" className='inputs experience_inp' placeholder='Post (Employee, Manager, Internee etc)'/>
            </div>
            <div>
              <div id='ok_first_experience' className="ok_tick" onClick={ok_first_experience}>&#x2713;</div>
              <div id='edit_first_experience' className="edit_pen" onClick={edit_first_experience}>&#x2710;</div>
              <div id='delete_first_experience' className="skildel" onClick={delete_first_experience}>&#x2716;</div>
            </div>
          </div>
        
        </div>
        <div className='profileinfo' id="skills"><h4>Skills</h4><h1 className='plus' onClick={newSkill}>+</h1><div id='first_skill'><input type="text" name="skil" id='skil' className="inputs" placeholder='+ Add Skill' /><span id='delete_first_skill' className="skildel" onClick={delete_first_skill}>&#x2716;</span></div></div>
        <div className='profileinfo' id="resumeblock"><h4>Resume</h4><input type="file" name="resume" id="resume" onChange={handleResumeFileChange} /> {selectedResumeFile && ( <p>Selected file: {selectedResumeFile.name}</p> )} </div>
        <div className='profileinfo' id="coverletter"><h4>Cover-Letter/CV</h4><input type="file" name="CV" id="CV" onChange={handleCVFileChange} /> {selectedCVFile && ( <p>Selected file: {selectedCVFile.name}</p> )} </div>
      </div>

    </>
  )
}

export default Profile
