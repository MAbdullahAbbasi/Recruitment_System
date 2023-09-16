import React from 'react'
import '../css/jobs.css'
import MainPage from './mainPage'
import CreateJob from './createJob';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JobList from './jobList';

function Jobs() {

  function handleAll(){
    document.getElementById('all').style.color = 'black'
    document.getElementById('all').style.borderBottom = '2px solid black'

    document.getElementById('related').style.color = 'gray'
    document.getElementById('related').style.borderBottom = '2px solid white'

}

function handleRelated(){

  document.getElementById('related').style.color = 'black'
  document.getElementById('related').style.borderBottom = '2px solid black'

  document.getElementById('all').style.color = 'gray'
  document.getElementById('all').style.borderBottom = '2px solid white'
}

  return (

    <div>
      <MainPage message={'jobs'} />
      
      <div id="create_job" className='title_word full'><CreateJob /></div>
      <h1 id='jobs_word' className='title_word full'>Apply Now <FontAwesomeIcon icon = {faArrowAltCircleUp} id='bell'/> </h1>
      

      <div id="all_related">

      <i id='all' className='options' onClick={handleAll}>All</i> <i id='related' className='options' onClick={handleRelated}>  Related</i>
      </div>

      <JobList />
      

    </div>
  )
}

export default Jobs
