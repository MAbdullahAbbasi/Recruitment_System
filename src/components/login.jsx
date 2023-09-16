import React,{ useState } from 'react';
import '../css/login.css'
import { useEffect } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Background from './background';
import jwtDecode from 'jwt-decode';
import { useLocation } from 'react-router-dom';


function Login(props) {

  const [username, setUsername] = useState('');
  const[email,setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setnewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isEmailFormat, setIsEmailFormat] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [newshowPassword, setNewShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alert, setAlert] = useState('');
  const capitalLetterRegex = /[A-Z]/;
  const smallLetterRegex = /[a-z]/;
  const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/;
  const numberRegex = /\d/; // \d matches any digit character (0-9)
  const emptyRegex = /^\s*$/;
  const navigate= useNavigate();
  let background_image = ''
  const location = useLocation();

  let user = ''

  user = location.search;
  

  const showAlert = (message,type) => {
    setAlert({msg: message,
    type: type})
    const d = document.getElementById('danger')
    d.style.display = 'block'
  }

  function handleConfirmPassword(event)
    {

        const { value } = event.target;
    
    // If the entered password is longer than 8 characters, truncate it to 8 characters
    const truncatedPassword = value.slice(0, 8);
    setConfirmPassword(truncatedPassword);

    }

  function handlenewPassword(event)
    {
        
      const { value } = event.target;
    
      // If the entered password is longer than 8 characters, truncate it to 8 characters
      const truncatedPassword = value.slice(0, 8);
      setnewPassword(truncatedPassword);
  }

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleNewTogglePassword = () => {
    setNewShowPassword((prevState) => !prevState);
  };

  const handleConfirmTogglePassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleChangeUsername = (event) => {
    const { value } = event.target;
    setUsername(value);

    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    setIsEmailFormat(emailRegex.test(value));
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    
    // If the entered password is longer than 8 characters, truncate it to 8 characters
    const truncatedPassword = value.slice(0, 8);
    setPassword(truncatedPassword);

    // Check if the entered password is exactly 8 characters
    const isValidLength = truncatedPassword.length === 8;
    setIsPasswordValid(isValidLength);
  };

  const handleForgotPassword = () =>{
    const forgot = document.getElementById('forgot');
    forgot.style.display = "block";
  }

  const handleCross = () =>{
    const forgot = document.getElementById('forgot');
    setEmail('');
    document.getElementById('danger').style.display = 'none'
    
    const b = document.getElementById('isuser');
    const c = document.getElementById('nouser');

    forgot.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";

  }

  const handle = async (e) =>{

    if(user === '?user'){
      navigate('/home'); // Pass the user's category as a search parameter
    }
    else{
        navigate('/home1'); // Pass the user's category as a search parameter
      }


    // e.preventDefault();
    
    // try {
    //   const response = await fetch('http://localhost:1000/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //       password: password
    //     })
    //   });
    //   console.log('idr tak hun mn')
    //   console.log('idr tak hun mn')
      
    //   if (response.ok) {
        
    //     const responseData = await response.json();
    //     console.log(responseData.cat)
    //     console.log(responseData.token)
    //     localStorage.setItem('jwtToken', responseData.token);

    //     const storedToken = localStorage.getItem('jwtToken');
    //     const decodedToken = jwtDecode(storedToken);
    //     // const userUsername = decodedToken.selectedText;
    //     console.log(decodedToken)

    //     if (storedToken) {
    //       console.log('Token exists in local storage:', storedToken);
    //     } else {
    //       console.log('Token does not exist in local storage.');
    //     }


    //     if (responseData.token) {
    //       setUsername('');
    //       setPassword('');
          

          
    //       if (responseData.cat === 'Admin') {
    //         toast.success('Logged in successfully', {
    //           position: 'top-right',
    //           autoClose: 500
    //         });
    //         navigate('/dashboardinstructionsUser'); // Pass the user's category as a search parameter
    //       }
          
          
    //       else{
    //         toast.success('Logged in successfully', {
    //           position: 'top-right',
    //           autoClose: 500
    //         });
    //         navigate('/dashboard?cat=User');
    //       }     


    //     } else {
    //       console.error('Token not found in the response data');
    //     }

    //   }else if(response.status === 401)
    //   {
    //     console.log('error aya e')
    //     showAlert("Invalid Credentials", "Error: ")
    //   } else if(response.status === 400)
    //   {
    //     console.log('error aya e')
    //     showAlert("User does not exist", "Error: ")
    //   } 
    //   else {
    //     console.error('Failed to submit form:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  }

  const handleSignIn = async(e) =>{
    e.preventDefault();
    const a = document.getElementById('signin');

    if (emptyRegex.test(newpassword)  || emptyRegex.test(confirmpassword)) {
      document.getElementById('danger').style.display = "block";
      
      showAlert("No password entered", "Error: ")
      return;
    }

    document.getElementById('signin').style.display = 'inline'
    
    if(!(capitalLetterRegex.test(newpassword) &&
    smallLetterRegex.test(newpassword) &&
    specialCharacterRegex.test(newpassword) &&
    numberRegex.test(newpassword)))
    {
      document.getElementById('danger').style.display = "block";
      showAlert("Password should contain atleast one Capital letter, one small letter, one number and one special character `! @ # $ % ^ & * ( ) _ + { } \ [ ] : ; < > , . ? ~ - `", "Error: ")
      a.style.display = "none"
      return;
    }

        if (newpassword !== confirmpassword) {
          console.error('Passwords do not match');
      document.getElementById('danger').style.display = "block";
          // setError("Passwords do not match");
          showAlert("Passwords Donot Match", "Error: ")
      a.style.display = "none"
          return;
        }
        else{
          document.getElementById('danger').style.display = "none";
        }


        try {
          const response = await fetch('http://localhost:1000/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              newpassword: newpassword
            })
          });
    
          if (response.status === 200) {
            a.style.display = "inline"
        setEmail('')    
        setnewPassword('')
    setConfirmPassword('')
    
          }else if(response.status === 409){
              showAlert('Cant submit' , 'Error: ')
          } 
          else {
            console.error('Failed to submit form:', response.statusText);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
        
        
  }

  const handleLogIn =() =>{
    const a = document.getElementById('forgot');
    a.style.display = "none"
    const c = document.getElementById('isuser');
    const b = document.getElementById('nouser');

    c.style.display = "none";
    b.style.display = "none";

    setnewPassword('');
    setConfirmPassword('')
  }

  const handleEmail = (event) => {
    const {value} = event.target;
    setEmail(value);
  }

  const handleConfirmCheck = async (e) =>{
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format');
      showAlert("Invalid Email", "Error: ")
      setnewPassword('')
      setConfirmPassword('')
      document.getElementById('danger').style.display = "block"
      return;
    }else{
      
      document.getElementById('danger').style.display = "none"
    }
    
    
    
    try {
      const response = await fetch('http://localhost:1000/find', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        })
      });
      
      const a = document.getElementById('isuser');
      const b = document.getElementById('nouser');
      if (response.status === 200) { 
        a.style.display = "block";
        b.style.display = 'none'
      }else if(response.status === 409){
        b.style.display = "inline";
        a.style.display = 'none'
      } 
      else {
        console.error('Failed to update form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }


  }

  useEffect(() => {
    const element = document.querySelector('#signin');
    element.classList.add('active');
    const element1 = document.querySelector('#btn');
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
    <div className="LoginSignUp">



      <Background backgroundImage={background_image} />





      <img id='logoimg' src="https://seeklogo.com/images/B/bahria-town-logo-41185D0AFB-seeklogo.com.png" alt="logo" width={100} height={100}/>
      <div id="signin">



      <center><h2>Sign In</h2></center>






    <form onSubmit={handle}>
      <section>
      <div id="danger" style={{display:"none"}}  className={`alert alert-danger`} role="alert">{alert.type}{alert.msg}</div>

        <div>
          <label htmlFor="user"><FaUser /> Username:</label><br/>
        <input  
              value={username}
              onChange={handleChangeUsername}
              style={{ border: isEmailFormat ? '1px solid #ccc' : '2px solid red' }}
              type="text" 
              name="user" 
              id="user"
              required 
              placeholder='someone@xyz.com'
               />
              {!isEmailFormat && <p style={{ color: 'red', margin: '0%', marginBottom : '-20%', fontSize: 'small'}}>Please enter a valid email address.</p>}
</div>
<br />

        <div><label htmlFor="pass"><FaLock/> Password:&ensp;</label>
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
              style={{ border: isPasswordValid ? '1px solid #ccc' : '2px solid red' }}
              type={showPassword ? "text" : "password"}
              name="pass" 
              id="pass"
              required 
              placeholder='********'/>
                          
              {!isPasswordValid && (
              <p style={{ color: 'red', margin: '0%' ,fontSize: 'small' , marginBottom : '-5%',}}>Password must be exactly 8 characters long.</p>
              )}
        </div>

        
        <div id="btn"><button type='submit'>Sign in</button></div>

        


        <Link onClick={handleForgotPassword} to="">Forgot Password?</Link>
        <Link id="second" to={{pathname: '/signup', search : user }}>Create Account?</Link>

      </section>
      </form>



      
      {/* //forgot password block  */}
      <div id='forgot'>
          {/* head that has text forgot password  */}
          <div id="heading">
                Forgot Password? <FaTimes id="cross" onClick={handleCross}/>
          </div>

      <div id="danger" style={{display:"none"}}  className={`alert alert-danger`} role="alert">{alert.type}{alert.msg}</div>


          {/* this contains all the contents that forgot password handles  */}
          <div id="block">
                <div id="email">
                    <label htmlFor="entry">Enter your email:</label><br />
                    <input 
                    value={email}
                    onChange={handleEmail}
                    type="email" name="entry" id="entry" placeholder='userexample@gmail.com'/>
                </div>
                <div className="confrim">
                  <button onClick={handleConfirmCheck}>Confirm</button>
                  <span id="nouser" >User doesn't exist<Link className='Link' to="/"><u><i>Sign Up</i></u></Link></span>
                </div>

                <div id="isuser">
                    <div id="passwordhandle">
                      <div id="passwordentry">
                        <label htmlFor="passw">Enter new password:</label>
                        {newshowPassword ? (
                          <FaEyeSlash className='icon' onClick={handleNewTogglePassword} />
                        ) 
                        : 
                        (
                          <FaEye className='icon' onClick={handleNewTogglePassword} />
                        )}
                        <br />
                        <input value={newpassword}
                                onChange={handlenewPassword}
                                style={{ border: isPasswordValid ? '1px solid #ccc' : '2px solid red' }}
                                type={newshowPassword ? "text" : "password"}
                                name="pass" 
                                id="pass1" 
                                placeholder='********'
                                maxLength={8}/>
                          
                          {!isPasswordValid && (
                          <p style={{ color: 'red', margin: '0%' ,fontSize: 'small'}}>Password must be exactly 8 characters long.</p>
                          )} 
                      </div>


                      <div id="confirmation">
                        <label htmlFor="confirmpassw">Confirm new password:</label>
                        {showConfirmPassword ? (
                          <FaEyeSlash className='icon' onClick={handleConfirmTogglePassword} />
                        ) 
                        : 
                        (
                          <FaEye className='icon' onClick={handleConfirmTogglePassword} />
                        )}
                        <br />
                        <input value={confirmpassword}
                              onChange={handleConfirmPassword}
                              style={{ border: isPasswordValid ? '1px solid #ccc' : '2px solid red' }}
                              type={showConfirmPassword ? "text" : "password"}
                              name="pass" 
                              id="pass2" 
                              placeholder='********'
                              maxLength={8}/>
                          
                        {!isPasswordValid && (
                        <p style={{ color: 'red', margin: '0%' ,fontSize: 'small'}}>Password must be exactly 8 characters long.</p>
                        )}                       </div>
                    </div>

                    <div className="confrim">
                      <button onClick={handleSignIn}>Update</button>
                      <span style={{display: "none"}} id="signin" >Password Updated<Link className='Link' to="/login" onClick={handleLogIn}><u><i>Sign In</i></u></Link></span>
                    </div>
                </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login
