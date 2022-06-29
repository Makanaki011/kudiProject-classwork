import React from 'react'
import person from './images/Union 3/Union 3.png'
import './Approach.css'

const approach = () => {
  return (
    <div className='approach'>
<h1>Our Approach</h1>
<p className="head">The program rewrads users for delivering on certain tasks</p>

<div className="appbox">
<div className="woman">
    <img src={person} alt="woman" />
</div>

<div className="text">
    <p className='up'>Kudi.com provides with oppurtunity to take advantage of the internet and turn out everyday social media into a tool for making passive income</p>

    <div className="member">
        <div className="mem">
            <div className="empty">

            </div>
           <div>
           <h3>Membership</h3>
            <p>  signup to join Kudi for onine opportunity that pays</p>
           </div>
        </div>
        <div className="pack">
            <div className="empty">

            </div>
            <div>
            <h3>Choose a Package</h3>
            <p>select subscription packages. They're proportional to the wages earned by subscribers </p>
            </div>
        </div>
    </div>
    <div className="member-2">
        <div className="mem">
            <div className="empty">

            </div>
          <div>
          <h3>Share ADs</h3>
            <p>what you do as an affliate is to share these Ads to your Facebook page daily and get paid</p>
          </div>
        </div>
        <div className="pack">
           <div className="empty">

           </div>
           <div>
           <h3>Get Paid</h3>
            <p>Your activity earning will increase based on the package you are on </p>
           </div>
        </div>
    </div>
</div>
</div>

    </div>
  )
}

export default approach