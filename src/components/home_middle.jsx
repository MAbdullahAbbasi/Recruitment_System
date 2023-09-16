import React from 'react'
import { useEffect } from 'react'
import '../css/home.css'


function Home_middle() {

    useEffect(()=>{
        const image_show = true
    
        const home_block = document.getElementById('middle')
    
        const big_block = document.createElement('div')
        big_block.className = 'big_block'
    
        const block = document.createElement('div')
        block.id = 'one_home_block'
        block.className = 'inner_block'
        block.title = 'Oliver Yew'
    
        const image_block = document.createElement('div')
        image_block.style.justifyContent = 'center'
        image_block.style.alignItems = 'center'
        image_block.className = 'padding'
    
        const image = document.createElement('div')
        image.id = 'home_block_img'
        image.className = 'img'
    
        const home_text = document.createElement('div')
        home_text.className = 'padding'
        home_text.style.width = '90%'
    
        const username = document.createElement('i')
        username.style.fontWeight = 'bold'
        username.style.fontStyle = 'normal'
        username.textContent = 'Olive Yew .'
    
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
    
        details.innerHTML = 'These are complete details of my post'
    
    
        
        image_block.appendChild(image)
    
        home_text.appendChild(username)
        home_text.appendChild(timestamp)
        home_text.appendChild(post)
    
        block.appendChild(image_block)
        block.appendChild(home_text)
    
        big_block.appendChild(block)
        big_block.appendChild(heading)
        big_block.appendChild(details)
    
        home_block.appendChild(big_block)
    
        if(image_show === true){
    
          const big_image = document.createElement('div')
          big_image.id = 'big_img'
          big_block.appendChild(big_image)
          }
    
        
      },[])

  return (
    <div>
      
          <div id='middle'></div>
      
    </div>
  )
}

export default Home_middle
