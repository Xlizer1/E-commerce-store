import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Product({ product }) {
  const trimExtention = filename => filename.split('.')[0];

  return (
    <>
      <Link to={`/details/${trimExtention(product.id)}`}>
        <div className='card'>
          <img className='card-img' src={ product.image.url } alt='#' width='275px'/>
          <div className='content'>
            <p>
              {product.name}
            </p>
            <p>
              ${product.price.formatted}
            </p>
          </div>
        </div>
      </Link>
      <Outlet />
    </>
  )
}

export default Product