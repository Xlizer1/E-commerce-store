import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import commerce from './components/lib/commerce'
import Home from './pages/Home'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Header from './components/Header/Header'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

import './main.css'

function App() {
  const [products, setProducts]= useState([]);
  const [cart, setCart ] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve())
  }

  const addToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart)
  }

  const updateCartQty = async(productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });

    setCart(item.cart)
  }

  const emptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <BrowserRouter>
      <Header cartQuantity={ cart.total_items }/>
      <Routes>
        <Route path='/' element={ <Home products={ products }/> }/>
        <Route path='/details/:id' element={ <Details products={ products } cart={ cart } updateCartQty={ updateCartQty } addToCart={ addToCart }/> }/>
        <Route path='/cart' element={ <Cart cart={ cart } updateCartQty={ updateCartQty } emptyCart={ emptyCart }/> }/>
      </Routes>
      <Newsletter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
