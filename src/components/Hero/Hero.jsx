import React from 'react'
import hero from '../assets/img/hero.png'

function Hero() {
  return (
    <div className='section hero'>
      <img src={hero} alt='#'/>
      <div className='content'>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ultrices magna mauris pellentesque dignissim ante varius diam elit.</p>
        <button className='button'>OUR PRODUCTS</button>
      </div>
    </div>
  )
}

export default Hero