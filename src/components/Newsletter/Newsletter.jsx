import React from 'react'

import newsletter from '../assets/img/mailing-list-img.png'

function Newsletter() {
  return (
    <div className='section'>
      <div className='newsletter'>
        <img src={ newsletter } alt='#' width='445px'/>
        <div className='content'>
          <div>
            <p>Sign up for our newsletter and get 10% off your next order.</p>
            <input type="email" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter