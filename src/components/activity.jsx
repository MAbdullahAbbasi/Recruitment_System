import React from 'react'
import { useEffect } from 'react';
import '../css/activity.css'
import MainPage from './mainPage'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Activity() {

  useEffect(()=>{
    creation_of_block('pending')
  },[])
  
  function creation_of_block(status){

      const activity_block = document.getElementById('requests_block')
      const block = document.createElement('div')
      block.id = 'one_activity'
      block.className = 'job'
  
      const image_block = document.createElement('div')
      image_block.style.justifyContent = 'center'
      image_block.style.alignItems = 'center'
      image_block.className = 'padding'
  
      const image = document.createElement('div')
      image.id = 'activity_img'
      image.className = 'img'
      image.title = 'Barb Akew'
  
      const activity_text = document.createElement('div')
      activity_text.className = 'padding'
      activity_text.style.width = '90%'

      const middle_block = document.createElement('div')
      middle_block.title = 'Barb Akew'
      middle_block.id='middle_block'
  
      const username = document.createElement('i')
      username.style.fontWeight = 'bold'
      username.style.fontStyle = 'normal'
      username.textContent = 'Barb Akew .'
  
      const timestamp = document.createElement('i')
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      timestamp.style.fontStyle = 'normal'
      timestamp.textContent = ` ${hours}:${minutes}:${seconds}`
      timestamp.style.fontSize = 'smaller'
  
      const post = document.createElement('pre')
      post.textContent = 'Manager, HR Department'
  
      const heading = document.createElement('div')
      heading.textContent = 'We Are Hiring!'
      heading.style.color = 'rgb(81, 182, 216)'
      heading.style.fontWeight = 'bold'
      heading.style.fontSize = '20px'
  
      const details = document.createElement('div')
  
      const activity_title = document.createElement('div')
      activity_title.innerHTML =`<b>Job Title: </b>` + ' Web Developer'
  
      const activity_description = document.createElement('div')
      activity_description.innerHTML =`<b>Job Description: </b>` + 'We are hiring a full Stack Web Developer'
  
      const activity_timing = document.createElement('div')
      activity_timing.innerHTML =`<b>Job Timing: </b>` + '9am - 5pm'
  
      const activity_nature = document.createElement('div')
      activity_nature.innerHTML =`<b>Job Nature: </b>` + 'On-Site'
  
      const activity_location = document.createElement('address')
      activity_location.innerHTML =`<b>Job Location: </b>` + 'Phase 8, Bahria Town, Rawalpindi'

  
      image_block.appendChild(image)
  
      middle_block.appendChild(username)
      middle_block.appendChild(timestamp)
      middle_block.appendChild(post)

      activity_text.appendChild(middle_block)

      activity_text.appendChild(heading)
      activity_text.appendChild(details)
  
      details.appendChild(activity_title)
      details.appendChild(activity_description)
      details.appendChild(activity_nature)
      details.appendChild(activity_timing)
      details.appendChild(activity_location)
  
      block.appendChild(image_block)

      block.appendChild(activity_text)
      if(status){
        const apply_icon = document.createElement('div');
        apply_icon.title = 'Apply'
        apply_icon.id ='applyicon'
        if(status === 'pending'){
          apply_icon.innerHTML = 'Pending'
          apply_icon.style.backgroundColor = 'white'     
          apply_icon.style.color = 'rgb(221, 163, 15)'    
        }
        else if(status === 'accepted'){
          apply_icon.innerHTML = 'Accepted'
          apply_icon.style.backgroundColor = 'white'     
          apply_icon.style.color = 'green'    
        }
        else if(status === 'rejected'){
          apply_icon.innerHTML = 'Rejected'
          apply_icon.style.backgroundColor = 'white'     
          apply_icon.style.color = 'rgb(184, 0, 0)'    
        }
        block.appendChild(apply_icon)
      }

      activity_block.appendChild(block)
      
    }
    
    function handleAllRequest(){
        document.getElementById('allReq').style.borderBottom = '2px solid black'

        document.getElementById('allReq').style.transition = '0.5s'

  
        document.getElementById('pending').style.borderBottom = '2px solid rgb(221, 221, 221)'
        document.getElementById('accepted').style.borderBottom = '2px solid rgb(221, 221, 221)'
        document.getElementById('rejected').style.borderBottom = '2px solid rgb(221, 221, 221)' 

        const status= 'pending'
        
        creation_of_block(status)
    }

    function handlePending(){
      document.getElementById('pending').style.borderBottom = '2px solid rgb(221, 163, 15)'

      document.getElementById('pending').style.transition = '0.5s'


      document.getElementById('allReq').style.borderBottom = '2px solid rgb(221, 221, 221)'
      document.getElementById('accepted').style.borderBottom = '2px solid rgb(221, 221, 221)'
      document.getElementById('rejected').style.borderBottom = '2px solid rgb(221, 221, 221)'  
      creation_of_block()

  }

  function handleAccepted(){
    document.getElementById('accepted').style.borderBottom = '2px solid green'

    document.getElementById('accepted').style.transition = '0.5s'


    document.getElementById('pending').style.borderBottom = '2px solid rgb(221, 221, 221)'
    document.getElementById('allReq').style.borderBottom = '2px solid rgb(221, 221, 221)'
    document.getElementById('rejected').style.borderBottom = '2px solid rgb(221, 221, 221)'  
    creation_of_block()
  
  }

  function handleRejected(){
    document.getElementById('rejected').style.borderBottom = '2px solid rgb(184, 0, 0)'

    document.getElementById('rejected').style.transition = '0.5s'


    document.getElementById('pending').style.borderBottom = '2px solid rgb(221, 221, 221)'
    document.getElementById('accepted').style.borderBottom = '2px solid rgb(221, 221, 221)'
    document.getElementById('allReq').style.borderBottom = '2px solid rgb(221, 221, 221)'  
    creation_of_block()

  }
  
    

    return (
    <div>
      <MainPage message={'activity'}/>
      <div className="full" id='requestfull'>
        <h1 id='requests_word' className='title_word'>Requests <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToCtLcdJ1MUBNhSjrOW6BvmV1Hwd00HlrBw&usqp=CAU" alt="" /> </h1>
        <div className="margin">

        <div id="all_options">
        <div id='allReq' className='request_options' onClick={handleAllRequest}>All</div> 
        <div id='pending' className='request_options' onClick={handlePending}>Pending</div> 
        <div id='accepted' className='request_options' onClick={handleAccepted}>Accepted</div>
        <div id='rejected' className='request_options' onClick={handleRejected}>Rejected</div>
        </div>

        <div id="requests_block"></div>

        </div>
        </div>
    </div>
  )
}

export default Activity
