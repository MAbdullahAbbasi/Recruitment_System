import React from 'react'
import { useEffect } from 'react';

function JobList() {

    useEffect(()=>{

        for(let i=0;i<1;i++){
    
        
        const jobs_block = document.getElementById('jobs_block')
        const block = document.createElement('div')
        block.id = 'one_job'
        block.className = 'job'
    
        const image_block = document.createElement('div')
        image_block.style.justifyContent = 'center'
        image_block.style.alignItems = 'center'
        image_block.className = 'padding'
    
        const image = document.createElement('div')
        image.id = 'job_img'
        image.className = 'img'
        image.title = 'Hazel Nutt'
    
        const job_text = document.createElement('div')
        job_text.className = 'padding'
        job_text.style.width = '90%'
    
        const job_mid_block = document.createElement('div')
        job_mid_block.title='Hazel Nutt'
        job_mid_block.style.cursor = 'pointer'
    
        const username = document.createElement('i')
        username.style.fontWeight = 'bold'
        username.style.fontStyle = 'normal'
        username.textContent = 'Hazel Nutt .'
    
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
    
        const job_title = document.createElement('div')
        job_title.innerHTML =`<b>Job Title: </b>` + ' Web Developer'
    
        const job_description = document.createElement('div')
        job_description.innerHTML =`<b>Job Description: </b>` + 'We are hiring a full Stack Web Developer'
    
        const job_timing = document.createElement('div')
        job_timing.innerHTML =`<b>Job Timing: </b>` + '9am - 5pm'
    
        const job_nature = document.createElement('div')
        job_nature.innerHTML =`<b>Job Nature: </b>` + 'On-Site'
    
        const job_location = document.createElement('address')
        job_location.innerHTML =`<b>Job Location: </b>` + 'Phase 8, Bahria Town, Rawalpindi'
    
        const apply_icon = document.createElement('button');
        apply_icon.title = 'Apply'
        apply_icon.innerHTML = 'Apply &#10132;'
        apply_icon.id ='applyicon'
    
        image_block.appendChild(image)
    
        job_mid_block.appendChild(username)
        job_mid_block.appendChild(timestamp)
        job_mid_block.appendChild(post)
    
        job_text.appendChild(job_mid_block)
        job_text.appendChild(heading)
        job_text.appendChild(details)
    
        details.appendChild(job_title)
        details.appendChild(job_description)
        details.appendChild(job_nature)
        details.appendChild(job_timing)
        details.appendChild(job_location)
    
        block.appendChild(image_block)
        block.appendChild(job_text)
        block.appendChild(apply_icon)
        jobs_block.appendChild(block)
    
        apply_icon.addEventListener('click' , function (){
          block.style.color = 'gray'
          apply_icon.style.backgroundColor = 'green'
          apply_icon.innerHTML = 'Applied&#10003;'
          apply_icon.disabled = true
        })
      
      }
    
      },[])
      
      
  return (
    <div>
      <div className="">
        <div className="margin">
            <div id="jobs_block" ></div>
        </div>
      </div>
    </div>
  )
}

export default JobList
