import React,{ useState } from 'react';
import '../../css/login.css'
import { useEffect } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Background from '../background';
import { useLocation } from 'react-router-dom';


function Login() {

  //username states initialized
  const [username, setUsername] = useState('');

  //email state initialized
  const[email,setEmail]= useState('');

  //password state initialized
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //unnecessary states initialized
  const [isEmailFormat, setIsEmailFormat] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [alert, setAlert] = useState('');
  
  let background_image = ''
  
  const navigate= useNavigate();
  const location = useLocation();
  let user = ''

  user = location.search;
  
  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
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

  const handle = async () =>{
      navigate('/home');
    
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

            <div id="links">
              <Link to="">Forgot Password?</Link>
              <Link id="second" to={{pathname: '/signup', search : user }}>Create Account?</Link>
            </div>

          </section>
        </form>
        
      </div>

    </div>
  )
}

export default Login