import React from 'react'

import logo from '../assets/img/logo.svg'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

function Header({ cartQuantity }) {
  return (
    <header className='section'>
      <Link to='/'><img src={ logo } alt='#'/></Link>
      <ul>
        <a href='/'><li>Home</li></a>
        <a href='/collection'><li>Collection</li></a>
        <a href='/contact'><li>Contact</li></a>
      </ul>
      <Link to='/Cart' className='link'>
        <Badge color='secondary' badgeContent={ cartQuantity } className='badge' />
        <ShoppingCart className='cart'/>
        Cart
      </Link>
    </header>
  )
}

export default Header