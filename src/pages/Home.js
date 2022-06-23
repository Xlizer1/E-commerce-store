import React from 'react'

import Hero from '../components/Hero/Hero'
import Products from '../components/Products List/Products'


function Home({ products }) {
  return (
    <div className='home'>
      <Hero/>
      <Products products={ products }/>
    </div>
  )
}

export default Home