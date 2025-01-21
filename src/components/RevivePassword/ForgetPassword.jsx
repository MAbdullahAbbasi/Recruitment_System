import React from 'react'

function ForgetPassword() {
  return (
    <>
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
    </>
  )
}

export default ForgetPassword
