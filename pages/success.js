import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router';

import { useStateContext } from '@/contex/StateContex';
import { runFireWorks } from '@/lib/utils';



const success = () => {


    const {setCartItems, setTotalQuantities, setTotalPrice} = useStateContext();

    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireWorks()
    },[])

  return (
    <div className='success-wrapper'>
        <div className="success">
            <p className="icon">
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for your order !</h2>
            <p className="email-msg">check your inbox for your order receipt.</p>
            <p className="description">
                If you have any questions, please email <a className='email' href="mailto:codingwithcod@gmail.com">codingwithcod@gmail.com</a>
            </p>
            <Link href='/'>
                <button
                type='button'
                width="300px"
                className='btn'>

                    Continue Shopping
                </button>

            </Link>
        </div>
    </div>
  )
}

export default success