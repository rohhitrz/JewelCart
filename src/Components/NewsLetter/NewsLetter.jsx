import React from 'react'
import "./Newsletter.css"

 const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscibe to our newsletter</p>

        <div>
            <input type="email" name="Email" placeholder='Your Email Id..' />
            <input type="password" name="Password" placeholder='Your PassWord..' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter