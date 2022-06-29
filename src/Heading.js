import React from 'react'
import './Heading.css'
import person from './images/person.svg'
import basket from './images/basket.svg'
import woman from './images/Union 2.png'

const Heading = () => {
  return (
    <div className='headall'>
        <div className="bgn">
            
        </div>
    <div className="left">
      <div className="user">
      <img src={person} alt="profile image" /> <p>7,420 users</p>
      </div>
      <div className="invest">
      <img src={basket} alt="basket" /> <p>8,908 investments</p>
      </div>
      <div className="word">
          <p className='rich'>...richer journey that leads to success</p>
          <div className="head">

          <h1 className='headh1'>Welcome to Kudi</h1>
          <p>The largest affiliate marketing company with the fastest growing subscribers based in Africa</p>
          </div>
          <button className='btn btn-lg btn-warning'>Get started</button>
         
      </div>
      

    </div>
    <div className="right">
<img src={woman} alt="woman" />
    </div>
    </div>
  )
}

export default Heading