import React, { createElement, useEffect } from 'react'
import MainPage from './mainPage'
import '../css/home.css'
import Right1 from './right1';
import Home_middle from './home_middle';
import Home_left from './home_left';


function Home() {


  return (
    <div>
        <MainPage message={'home'}/>
        <div id='full_block_of_home'>
          
          <Home_left />


          <Home_middle />


          <Right1 />

        </div>
    </div>
  )
}

export default Home
