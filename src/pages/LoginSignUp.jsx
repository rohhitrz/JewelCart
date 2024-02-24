import React from 'react'
import './CSS/Loginsignup.css'

export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="Name" placeholder="Enter Your Name.." />
          <input type="text" name="email" placeholder="Enter Your Email.." />
          <input type="Password" name="Password" placeholder="Enter Your Password.." />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login"> Already have an account? <span>Login here</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to terms of use & privacy policy.</p>
        </div>

       </div>


    </div>
  )
}

export default LoginSignUp
