import React from 'react'

function CartItem({ item, updateCartQty }) {
  const productId = item.id;
  const quantity = item.quantity;
  
  return (
    <div className='cart-item'>
      <div className='item-name'>
        <img src={ item.image.url } alt='#' width= '50px'/>
        <h4>{ item.name }</h4>
      </div>
      <h4>{ item.quantity }</h4>
      <h4>{ item.price.formatted_with_symbol }</h4>
      <div>
        <button className='button-outline' onClick={() => updateCartQty(productId , quantity - 1 )}>-</button>
        <button className='button-outline' onClick={() => updateCartQty(productId , quantity + 1 )}>+</button>
        <button className='button'>Checkout</button>
      </div>
    </div>
  )
}

export default CartItem