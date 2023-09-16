import React, { useState } from 'react';
import '../css/dashboardUser.css'
import { Link } from 'react-router-dom';

function Instructions() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
    const step1 = document.getElementById('step1')
    const step2 = document.getElementById('step2')
    const step3 = document.getElementById('step3')
    const span1 = document.getElementById('sp1')
    const span2 = document.getElementById('sp2')
    const block1 = document.getElementById('b1')
    const block2 = document.getElementById('b2')


    if(step === 1){
        step1.style.display = 'block'
        step2.style.display = 'none'
        step3.style.display =  'none'
        span1.style.backgroundColor = 'black'
        span2.style.backgroundColor = 'black'
      block1.style.border = '2px solid black'
      block2.style.border = '2px solid black'

    }else if(step===2){
      step1.style.display = 'none'
      step2.style.display = 'block'
      step3.style.display = 'none'
      span1.style.backgroundColor = 'green'
      span2.style.backgroundColor = 'black'
      block1.style.border = '2px solid green'
      block2.style.border = '2px solid black'
    }else{
      step1.style.display = 'none'
      step2.style.display = 'none'
      step3.style.display = 'block'
      span1.style.backgroundColor = 'green'
      span2.style.backgroundColor = 'green'
      block1.style.border = '2px solid green'
      block2.style.border = '2px solid green'

    }
  };

  const step1 = 1
  const step2 = 2
  const step3 = 3

  

  
  return (

      <div id="sequmap">
        <Link to='/main'>Visit Main Page</Link>
        <h1 id='h1greets'>Welcome To Bahria Career Portal</h1>
        <div className="sequence-container">
          
            <div id='b1'
              key={step1}
              className={`step ${activeStep === step1 ? 'active' : ''}`}
              onClick={() => handleStepClick(step1)}             
            > 
              1
            </div>
            <span className='aline' id='sp1'></span>

          {/* <div className="sequence-line">
            {[1].map((_, index) => (
              <div
                key={index}
                className={`line ${index < activeStep - 1 ? 'active' : ''}`}
              />
            ))}
          </div> */}

          <div id='b2'
              key={step2}
              className={`step ${activeStep === step2 ? 'active' : ''}`}
              onClick={() => handleStepClick(step2)}             
            > 
              2
            </div>
            <span className='aline' id='sp2'></span>
            <div
              key={step3}
              className={`step ${activeStep === step3 ? 'active' : ''}`}
              onClick={() => handleStepClick(step3)}             
            > 
              3
            </div>

        
        </div>
        <div id='step1'>Update profile</div>
        <div id='step2' style={{display : 'none'}}>Find jobs</div>
        <div id='step3' style={{display : 'none'}}>Keep checking applications page</div>


      </div>

  );
};

export default Instructions
