import React, { useEffect } from 'react'

function Home_left() {

    useEffect(()=>{

    
        const side_big_block = document.getElementById('left')
    
        const side_block = document.createElement('div')
        side_block.id = 'one_home_side_block'
        side_block.className = 'side_block'
    
        const side_edit_icon = document.createElement('div')
        side_edit_icon.innerHTML = '\u2710'
        side_edit_icon.style.textAlign = 'right'
        side_edit_icon.style.fontSize = '25px'
        side_edit_icon.style.color = 'rgb(25, 168, 216)'
        side_edit_icon.style.cursor = 'pointer'
        
        const side_image_block = document.createElement('div')
        side_image_block.style.justifyContent = 'center'
        side_image_block.style.alignItems = 'center'
        side_image_block.id='side_img_block'
        side_image_block.className = 'padding'
        side_image_block.title = 'Brian Baker'
    
        const side_image = document.createElement('div')
        side_image.id = 'home_block_side_img'
    
        side_image_block.appendChild(side_image)
    
        const side_home_text = document.createElement('div')
        side_home_text.className = 'padding'
        side_home_text.style.width = '90%'
        side_home_text.style.margin = 'auto';
    
        const side_username = document.createElement('i')
        side_username.style.fontWeight = 'bold'
        side_username.style.fontStyle = 'normal'
        side_username.textContent = 'Brian Baker Lorem'
    
        const side_post = document.createElement('pre')
        side_post.textContent = 'Web Developer'
    
        side_home_text.appendChild(side_username)
        side_home_text.appendChild(side_post)
        
        side_block.appendChild(side_edit_icon)
        side_block.appendChild(side_image_block)
        side_block.appendChild(side_home_text)
    
        side_big_block.appendChild(side_block)
    
    },[])

  return (
    <div>
      <div id='left' className='blocks_of_home'>
          </div>
    </div>
  )
}

export default Home_left
