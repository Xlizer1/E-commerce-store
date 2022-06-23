import React from 'react'

import CartItem from '../components/Cart Item/CartItem'

function Cart({ cart, updateCartQty, emptyCart }) {
  ///////////////////////////////////////////////

  const EmptyCart = () => (
    <p>No Items in your Cart, Start Adding some!</p>
  )

  ///////////////////////////////////////////////

  const FilledCart = () => (
    <div className='cart'>
      <ul>
        { cart.line_items.map((item) => (
          <li key={ item.id }>
            <CartItem  item={ item }  updateCartQty={ updateCartQty }/>
          </li>
        ))}
      </ul>
      <div className='box'>
        <div className='Checkout'>
            <h3>All Items</h3>
            <h3>{ cart.total_items }</h3>
            <h3>{ cart.subtotal.formatted_with_symbol}</h3>
            <div>
              <button onClick={() => emptyCart() } className='button-outline'>
                Empty Cart
              </button>
              <button className='button'>
                Checkout
              </button>
            </div>
        </div>
      </div>
    </div>
  )

  ///////////////////////////////////////////////

  if(!cart.line_items) return <p className='loading'>Please wait your cart is loading now ...</p>;

  ///////////////////////////////////////////////

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      <div className='line'></div>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart