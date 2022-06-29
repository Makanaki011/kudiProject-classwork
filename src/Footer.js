import React from 'react'
import './Footer.css'
import logo2 from './images/9044.svg'
import location from './images/location.svg'
import mail from './images/mail.svg'
import google from './images/google.svg'
import playstore from './images/apple.svg'



const footer = () => {
  return (
    <div className='foot'>
<div className="top">
<h1>What our investor's Say</h1>
<h2 className="semi">"</h2>
<p className='main'>I was facing all lives challenges. Most of all, I was having a serious problem with my landlord. so I began investing  into kudi.com. I followed the procedures and after</p>
<p className='desi'>. . .</p>
</div>
<div className="bottom">
    <div className="footbox">
        <div className="log">
            <img src={logo2} alt="Foot logo" />
            <p>The program is one which rewards users for delivering on certain tasks the company allots</p>
        </div>
<div className="add">
    <h1>Address</h1>
   
    <div className="locate">
        <img src={location} alt="Location" />
        <p>for complainst and questions, kindly contact us through the mail links below</p>
    </div>
    <div className="mail">
        <img src={mail} alt="Mail" />
        <p>hello@kudi.com <br />skype:kudi</p>
    </div>
</div>
<div className="about">
    <h1>About Us</h1>
    
    <div className="lists">
        <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & condition</li>
        </ul>
    </div>
</div>

<div className="reso">
    <h1>Resources</h1>
   
    <div className="lists">
        <ul>
            <li>How it Works</li>
            <li>Affliate</li>
            <li>Coupon vendor</li>
            <li>FAQs</li>
        </ul>
    </div>
</div>

    </div>
</div>

<div className="bumbum">
<div className="socials">
    <p>Follow Us:</p>
    <div className="sociallinks">
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-instagram"></a>
<a href="#" class="fa fa-twitter"></a>

    </div>


</div>
<div className="store">
    <button className='apple'>
        <div className="logo">
            <img src={playstore} alt="apple store" />
        </div>
        <div className="storetex">
            <p>Download on the</p>
            <h2>App store</h2>
        </div>
    </button>

    <button className='google'>
        <div className="logo">
            <img src={google} alt="google store" />
        </div>
        <div className="storetex">
            <p>Download on the</p>
            <h2>Play store</h2>
        </div>
    </button>
</div>
</div>

    </div>
  )
}

export default footer