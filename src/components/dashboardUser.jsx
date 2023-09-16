import { React,useState } from 'react'
import '../css/dashboardUser.css'
import Instructions from './dashboardInstructionUser'

function DashboardUser() {

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedJob, setSelectedJob] = useState('');

    const handleJobChange = (event) => {
        setSelectedJob(event.target.value);
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    }

    function navbarslider(){
        const navbar = document.getElementById('usernavbar')
        const header = document.getElementById('userheaderandsection')
        const logo = document.getElementById('logo')


        if(navbar.style.width === '10%'){
            navbar.style.width = '20%'
            header.style.width = '80%'
            logo.style.width = '120px'
            logo.style.height = '150px'
            navbar.style.transition = '0.5s'
            logo.style.transition = '0.5s'
        }else {
            navbar.style.width = '10%'
            navbar.style.transition = '0.5s'
            header.style.width = '90%'
            logo.style.width = '40px'
            logo.style.height = '50px'
            logo.style.transition = '0.5s'

        }
    }

    function showProfile(){
        const profileopts = document.getElementById('profileoptions')

        if(profileopts.style.display === 'block'){
            profileopts.style.display = 'none'
            profileopts.style.transition = '0.5s'
        }
        else{
            profileopts.style.display = 'block'
            profileopts.style.transition = '0.5s'

        }
    }

    function showJobs(){
        const jobopts = document.getElementById('joboptions')
        const job = document.getElementById('jobs')

        if(jobopts.style.display === 'block'){
            jobopts.style.display = 'none'
        }
        else{
            jobopts.style.display = 'block'

        }
    }
        
    

  return (
    <div id="dashboardUser">



        <nav id="usernavbar">
            <img id='logo' src="https://seeklogo.com/images/B/bahria-town-logo-D1A3F8C43C-seeklogo.com.png" alt="logo" />
            
            <div id="profilesection"  onClick={showProfile}>
                <span id="profile">Profile </span>
                <br />

                <div id="profileoptions" style={{display : 'none' , cursor: 'pointer'}}>
                    <span onClick={handleDropdownChange} value='User Information'>User Information</span><br />
                    <span onClick={handleDropdownChange} value='Education'>Education</span><br />
                    <span onClick={handleDropdownChange} value='Experience'>Experience</span><br />
                    <span onClick={handleDropdownChange} value='Resume'>Resume</span><br />
                    <span onClick={handleDropdownChange} value='Preview Profile'>Preview Profile</span><br />
                </div>
            </div>
           
            <div id="jobsection" onClick={showJobs}>
                <span id="jobs" >Jobs </span>
                <br />

                <div id="joboptions" style={{display : 'none' , cursor: 'pointer'}}>

                    <span onClick={handleJobChange} value='All Jobs'>All Jobs</span><br />
                    <span onClick={handleJobChange} value='Current Applications'>Current Applications</span><br />
                    <span onClick={handleJobChange} value='Previous Apllications'>Previous Apllications</span><br />
                </div>
            </div>
        </nav>

        <div id="userheaderandsection">
            <header id='userheader'>
                <span style={{cursor: "pointer"}} onClick={navbarslider} id='dashes'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLwUcbtH8OYBbizqvk4knWy9evOO6-_clCj1CUi4&s" alt="" />
                </span>
                <h1 id='headergreeting'>Welcome to HR Portal</h1>

                <div id="userimgandname">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRL7fNFzSzvPpDAdOLxTWGfKSVSIxm8G9vSsWeJiqWEAB5NMbJhIdL-HfOuJHosQZMEM&usqp=CAU" alt="Photo" />
                    <span>Username</span>
                </div>
            </header>

            <section id='instructions'>
                <Instructions />
            </section>
        </div>

    </div>
  )
}

export default DashboardUser
