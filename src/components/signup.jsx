import React, { useState, useEffect } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate,useLocation } from 'react-router-dom';
import Background from './background';
import '../css/signup.css'

function Signup() {

    const[username,setusername] = useState('');
    const[email,setemail] = useState('');
    const[password,setPassword] = useState('');
    const[confirmpassword,setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isEmailFormat, setIsEmailFormat] = useState(true);
    const [alert, setAlert] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const danger = document.getElementById('danger');
    const success = document.getElementById('success');
    var alertToShow = 0;
    const navigate= useNavigate();
    const capitalLetterRegex = /[A-Z]/;
    const smallLetterRegex = /[a-z]/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/;
    const numberRegex = /\d/; // \d matches any digit character (0-9)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    var bcrypt = require('bcryptjs');
    let background_image = ''
    const location = useLocation();
  
    let user = ''
  
    user = location.search;

    const showAlert = (message,type) => {
    setAlert({msg: message,
    type: type})

    if(alertToShow === 0){
      danger.style.display = "block"
      success.style.display = "none"
    }
    else{
      success.style.display = "block"
      danger.style.display = "none"
      alertToShow = 0
      
      

    }
  }


    function handleOnChangeUsername(event) {
      const usernameRegex = /^[a-zA-Z\s]*$/;
      const { value } = event.target;
    
      // Allow empty input field or input matching the usernameRegex
      if (value === "" || usernameRegex.test(value)) {
        setusername(value);
      }
    }
    
    
    const handleChangeUsername = (event) => {
      const { value } = event.target;
      setemail(value);
    };
  
    const handleBlurEmail = () => {
      // Check the email format using the regular expression
      setIsEmailFormat(emailRegex.test(email));
    };


    function handleChangePassword(event)
    {
        const {value} = event.target;
        setPassword(value);
    }

    function handleConfirmPassword(event)
    {
        const {value} = event.target;
        setConfirmPassword(value);   
    }

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
    
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };


  const onSubmitHandler = async (e) => {
    
    e.preventDefault();
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
    const textboxValue = document.getElementById('name').value;
    const containsLetters = /[a-zA-Z]/.test(textboxValue);
    
    if (!emailRegex.test(email)) {
      console.error('Invalid email format');
      showAlert("Invalid Email", "Error: ")
      return;
    }
    else{
      danger.style.display = "none";
    }

    if(!(capitalLetterRegex.test(password) &&
         smallLetterRegex.test(password) &&
        specialCharacterRegex.test(password) &&
        numberRegex.test(password)))
        {
            toast.success('Data submitted successfully', {
            position: 'top-right',
            autoClose: 500
          });
          showAlert("Password should contain atleast one Capital letter, one small letter, one number and one special character `! @ # $ % ^ & * ( ) _ + { } \ [ ] : ; < > , . ? ~ - `", "Error: ")
          return;
        }

    // Check if passwords match
    if (password !== confirmpassword) {
      console.error('Passwords do not match');
      setPasswordsMatch(false);
      // setError("Passwords do not match");
      showAlert("Passwords Donot Match", "Error: ")
      return;
    }
    else{
      danger.style.display = "none";
    }

    if (containsLetters) {
      // If nameValue is empty or contains only spaces or non-alphabetic characters
      
      danger.style.display = "none";
    }
    else{
      showAlert(' Enter name' , "Error:");
      return;
    }

    setPasswordsMatch(true);
    var selectedText = '';
    const radioButtons = document.getElementsByName('option');

    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        selectedText = radioButtons[i].nextElementSibling.textContent;
        console.log('Selected Text:', selectedText);
          console.log('Selected Value:', radioButtons[i].value);
          console.log('Selected Value:', radioButtons[i].value);

          break; // Stop after finding the selected radio button
      }
  }
  if(selectedText === 'Admin' || selectedText === 'User'){      
    try {
      
      const userCategory = 'Basic'
      const request = ''
      const requestmsg = ''
      const teacher = 0
      const salt = await bcrypt.genSalt(10);
      const securedpass = await bcrypt.hash(password,salt);
      if(selectedText === 'Admin'){        
        const response = await fetch('http://localhost:1000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            username: username,
            password: securedpass,
            selectedText : selectedText,
          })
        });
        check(response);
      }

      else if(selectedText === 'User'){
        const response = await fetch('http://localhost:1000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            username: username,
            password: securedpass,
            selectedText : selectedText,
            userCategory : userCategory,
            request: request,
            requestmsg: requestmsg,
            teacher: teacher,
          })
        });
        check(response);

      }
      else{
        showAlert('Mujhko huwi na khabbbbarrr', 'Error ')

      }

      function check(response)
      {
        if (response.ok) {
          toast.success('Data submitted successfully', {
            position: 'top-right',
            autoClose: 500
          });     
          navigate('/login')
    
        setConfirmPassword ('');
        setPassword ('');
        setusername('');
        setemail ('');
    
    
    
    
        }else if(response.status === 409){
          alertToShow = 0
            showAlert('Email Already Exists' , 'Error: ')
        } 
        else {
          console.error('Failed to submit form:', response.statusText);
        }
      }
  
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  else{
    showAlert('Mujhko huwi na khabbbbarrr', 'Error ')
  }
  }

  useEffect(() => {
    const element = document.querySelector('#signupsection');
    element.classList.add('active');
    const element1 = document.querySelector('#name');
    element1.classList.add('active');
    const element2 = document.querySelector('#user');
    element2.classList.add('active');
    const element3 = document.querySelector('#pass');
    element3.classList.add('active');

    
  }, []);

  if(user === '?user'){
    background_image = 'https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
  else{
    background_image = 'https://images.pexels.com/photos/4344340/pexels-photo-4344340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }

  return (
    <main className='LoginSignUp'>
      <Background backgroundImage={background_image} />

      <img id='logoimg' src="https://seeklogo.com/images/B/bahria-town-logo-41185D0AFB-seeklogo.com.png" alt="logo" width={100} height={100}/>

      <div id='alerts'>
          <div id="danger" style={{display:"none"}}  className={`alert alert-danger`} role="alert">{alert.type}{alert.msg}</div>
          <div id="success" style={{display:"none"}}  className={`alert alert-success`} role="alert">{alert.type}{alert.msg}</div>
        </div>
      <section id="signupsection">
      <center><h2>Sign Up</h2></center>

        

        <br/>
          
        <form id="form" onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name"><FaUser className="fa-icons"/> Your Name:</label>
                <input 
                value={username}
                onChange={handleOnChangeUsername}
                maxLength={25}
                type="text" 
                name="name" 
                id="name" 
                required
                placeholder='Enter Your Name'/>
            </div>
            <div>
                <label htmlFor="email"><FaEnvelope className="fa-icons"/> Email:</label>
                <input  
              value={email}
              onChange={handleChangeUsername}
              onBlur={handleBlurEmail}
              style={{ border: isEmailFormat ? '1px solid #ccc' : '2px solid red' }}
              type="text" 
              name="user" 
              id="user" 
              required
              placeholder='someone@xyz.com'
               />            
             </div>
            {!isEmailFormat && <p style={{ color: 'red', marginTop: '-5%', fontSize: 'medium', margin: 'auto' ,width: '85%' }}>Please enter a valid email address.</p>}
            <br />
            <div>
                <label htmlFor="pass"><FaLock className="fa-icons"/> Password:</label>
                {showPassword ? (
                <FaEyeSlash className='icon' onClick={handleTogglePassword} />
              ) 
              : 
              (
                <FaEye className='icon' onClick={handleTogglePassword} />
              )}<br/>
                <input 
                value={password}
                onChange={handleChangePassword}
                type={showPassword ? "text" : "password"}
                minLength={8}
                required
                name="pass" id="pass" placeholder='********'
                maxLength={8}/>
            </div>
            <div>
                <label htmlFor="confirm"><FaLock className="fa-icons"/> Confirm Password:</label>
                {showConfirmPassword ? (
                <FaEyeSlash className='icon' onClick={handleToggleConfirmPassword} />
              ) 
              : 
              (
                <FaEye className='icon' onClick={handleToggleConfirmPassword} />
              )}<input 
                value={confirmpassword}
                onChange={handleConfirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                name="confirm" id="confirm" placeholder='********'
                minLength={8}
                required
                maxLength={8}/>
            </div>
            {error && <div style={{ color: 'red', fontsize: 'small', marginTop: '-5%'}} className="error">{error}</div>}
            
            
            
            <div id='btn'>
                <button type="submit" >Sign Up</button>
            </div>
            <div id='imgs'>
                <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="FB" />
                <img src="data:image/jpeg;base64,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" alt="twitter" />
                <img src="data:image/png;base64,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" alt="google" />
            </div>
        </form>
      
      </section>

    </main>
  );
};

export default Signup;