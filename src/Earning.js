import React from 'react'
import './Earning.css'
import refer from './images/1512.svg'
import member from './images/mem.svg'
import aff from './images/aff.svg'

const Earning = () => {
  return (
      <div className="earn">
         
          <h1>How to earn with Kudi?</h1>

<div className='box'>
          <div className="aff">
              <img src={refer} alt="aff" />
              <div className="affl">
                  <h2>
                      Affiliatte
                  </h2>
                  <p>What you do as an affliate to share these Ads to your Facebook page daily and get paid based on your activities and packages  </p>
              </div>
          </div>
          <div className="ref">
              <img src={refer} alt="Refer" />

              <div className="refe">
                  <h2>
                      Refer
                  </h2 >
                  <p>What you do as an affliate to share these Ads to your Facebook page daily and get paid based on your activities and packages  </p>
              </div>
          </div>
          <div className="kudimember">
              <img src={refer} alt="member" />
              <div className="kudiship">
                  <h2>Membership</h2>
                  <p>What you do as an affliate to share these Ads to your Facebook page daily and get paid based on your activities and packages  </p>
              </div>
          </div>
  
      </div>
     
      </div>
     

      
  )
}

export default Earning