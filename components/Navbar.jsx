import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai';

import Cart from './Cart';
import { useStateContext } from '@/contex/StateContex';

const Navbar = () => {

  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/' >Ninja Mart</Link>
      </p>

      <button
      className='cart-icon'
      onClick={() => setShowCart((prevValue) => !prevValue)}
      >
      <AiOutlineShopping/>
      <span className='cart-item-qty'>{totalQuantities}</span>

      </button>

      { showCart && <Cart /> }
    </div>
  )
}

export default Navbar