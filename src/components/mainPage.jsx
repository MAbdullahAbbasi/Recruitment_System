import React, { useEffect } from 'react'
import '../css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChartLine ,faSearch, faBriefcase , faBell} from '@fortawesome/free-solid-svg-icons';
import Profile from './profile';
import { Link } from 'react-router-dom';
import Background from './background';


function MainPage(props) {

  useEffect(() => {
    const divs = document.querySelectorAll('.navbarcomponents');
    const title= props.message;
    divs.forEach((div) => {
      div.style.borderBottom = '2px solid white'

    });
    if(title==='home')
    {
      document.getElementById('home').style.borderBottom = "2px solid black"
      document.getElementById('home').style.color = "black"
    }
    else if(title === 'activity')
    {
      document.getElementById('activity').style.borderBottom = "2px solid black"
      document.getElementById('activity').style.color = "black"
    }
    else if(title === 'jobs')
    {
      document.getElementById('jobs').style.borderBottom = "2px solid black"
      document.getElementById('jobs').style.color = "black"
    }else if(title === 'notifications')
    {
      document.getElementById('notifications').style.borderBottom = "2px solid black"
      document.getElementById('notifications').style.color = "black"
    }else if(title === 'profile')
    {
      document.getElementById('profile').style.borderBottom = "2px solid black"
      document.getElementById('profile').style.color = "black"
    }

  },[]
  );
  
  

  return (
    <div>
            <Background backgroundColor="rgb(246, 246, 246)" />

      <div id="navfather">

      <nav id="navbar" className="navbar">
        <img src="https://seeklogo.com/images/B/bahria-town-logo-41185D0AFB-seeklogo.com.png" alt="logo" />
        <span id='alger'>Human Recources</span>
        <span id="side-items-in-navbar">
            <Link to='/home' id='home' className='navbarcomponents' ><FontAwesomeIcon icon={faHome} /><div>Home</div></Link>
            <Link to='/activity' id='activity' className='navbarcomponents' ><FontAwesomeIcon icon={faChartLine} /><div>Activity</div></Link>
            <Link to='/jobs' id='jobs' className='navbarcomponents' ><FontAwesomeIcon icon={faBriefcase} /><div>Jobs</div></Link>
            <Link to='/notifications' id='notifications' className='navbarcomponents' ><FontAwesomeIcon icon={faBell} /><div>Notifications</div></Link>
            <Link to='/profile' id='profile' className='navbarcomponents' ><div><FontAwesomeIcon icon={faUser} /><div>Profile</div></div></Link>

            <form id="form-search-submit" className='navbarcomponents'>
            <input id="searchinput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button id="buttonSearch" className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
      </span>
      
      </nav>
      
      </div>
    </div>
  )
}

export default MainPage
