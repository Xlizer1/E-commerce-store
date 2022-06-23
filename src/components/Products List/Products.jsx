import React from 'react'

import Product from './Product/Product'

function Products({ products }) {
  
  if (!products.length) return <p className='loading'>Loading...</p>;
  
  return (
    <div className='section products'>
      <ul>
        {products.map((product) => (
          <li item key={ product.id }>
            <Product product={ product }/>
          </li>
        ))}
      </ul>
      <button className='button-outline'>MORE PRODUCTS</button>
    </div>
  )
}

export default Products