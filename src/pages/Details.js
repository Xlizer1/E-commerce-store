import React from 'react'
import { useParams } from 'react-router-dom'

function Details({ products, addToCart, cart }) {
  let params = useParams();
  
  function findById(item) {
    return item.id === params.id
  }

  var product = products.find(findById);

  if(!product) return <p className='loading'>Loading...</p>;

  return (
    <div className='section details'>
      <div className='images'>
        <div className='small'>
          <img src={ product.image.url } alt='#' width='70px'></img>
          <img src={ product.image.url } alt='#' width='70px'></img>
          <img src={ product.image.url } alt='#' width='70px'></img>
        </div>
        <img className='main' src={ product.image.url } alt='#' width='400px'></img>
      </div>
      <div className='content'>
        <h1> { product.price.formatted_with_symbol } </h1>
        <h2> { product.name } </h2>
        <p className='pargraph'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos obcaecati beatae laborum distinctio animi aliquam fugiat itaque omnis quo quibusdam quae, alias inventore, dolor iste eum illum asperiores earum magni! </p>
        <div className='buttons'>
          <button className='button-outline'>1</button>
          <button className='button' onClick={()=> addToCart(product.id, 1) }>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Details