import React, { useEffect } from 'react'
import MainPage from './mainPage'
import '../css/notifications.css'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Notifications() {

  useEffect(()=>{

    for(let i=0;i<7;i++){

    
    const notification_block = document.getElementById('notification_block')
    const block = document.createElement('div')
    block.id = 'one_notification'
    block.className = 'notification job'

    const image_block = document.createElement('div')
    image_block.style.justifyContent = 'center'
    image_block.style.alignItems = 'center'
    image_block.className = 'padding'

    const image = document.createElement('div')
    image.id = 'notification_img'
    image.className = 'img'

    const notification_text = document.createElement('div')
    notification_text.className = 'padding'
    notification_text.style.width = '90%'

    const username = document.createElement('i')
    username.style.fontWeight = 'bold'
    username.style.fontStyle = 'normal'
    username.textContent = 'Adam Mills .'

    const timestamp = document.createElement('i')
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    timestamp.style.fontStyle = 'normal'
    timestamp.textContent = ` ${hours}:${minutes}:${seconds}`
    timestamp.style.fontSize = 'smaller'

    const text = document.createElement('div')
    text.textContent = 'Hey there i am new here'

    const del_icon = document.createElement('abbr');
    del_icon.title = 'Delete'
    del_icon.innerHTML = '&#128465;'
    del_icon.style.fontSize ='30px'
    del_icon.style.color ='maroon'
    del_icon.style.textDecoration ='none'
    del_icon.style.cursor ='pointer'
    del_icon.style.fontWeight ='bold'

    image_block.appendChild(image)

    notification_text.appendChild(username)
    notification_text.appendChild(timestamp)
    notification_text.appendChild(text)

    block.appendChild(image_block)
    block.appendChild(notification_text)
    block.appendChild(del_icon)
    notification_block.appendChild(block)

    del_icon.addEventListener('click' , function (){
      notification_block.removeChild(block)
    })
  
  }

  },[])

  
  
  return (
    <>
      <MainPage message={'notifications'}/>
      <div className="full">
      <h1 id='notification_word' className='title_word'>Notifications <FontAwesomeIcon icon = {faBell} id='bell'/> </h1>
      <div id="notification_block" ></div>
      </div>
    </>
  )
}

export default Notifications
