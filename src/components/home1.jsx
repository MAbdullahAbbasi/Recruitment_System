import React from 'react'
import MainPage from './mainPage'
import '../css/home.css'
import Home_middle from './home_middle';
import Home_left from './home_left';
import CreatePost from './createPost';
import Right2 from './right2';

function Home1() {
  return (
    <div>
      
      <MainPage message={'home'}/>
        <div id='full_block_of_home'>
          
          <Home_left />

          <CreatePost />
          <Home_middle />

<Right2 />

        </div>

    </div>
  )
}

export default Home1
