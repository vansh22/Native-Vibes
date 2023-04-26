import React from 'react'
import "./Choice.css"
import { Link } from 'react-router-dom'
import background from "./assets/images/back.jpg"

function Choice() {
  return (
    <div style={{ backgroundImage: `url(${background})`}} className='wrapperz' >
     <h1>How do You Want To Use Our Website?</h1>
     <b>We’ll personalize your setup experience accordingly.</b>
     <Link to="/local" className='bt'>
       <div className='btcont'>
       I am a local
       </div>
     </Link>
     <Link  to="/sign-up/signup" className='bt'>
       <div className='btcont'>
       I am a traveller
       </div>
     </Link>
    </div>
  )
}

export default Choice;
