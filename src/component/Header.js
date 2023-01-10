import React from 'react'
import image from '../images/1.png'
import { useSelector } from 'react-redux'

const Header = () => {
const result = useSelector((state)=>state.cartData)
// console.warn("data in header",result);
    return (
        <div className='header'>
            <div className='cart-div'>
                <span>{result.length}</span>
               <img src={image} alt="##"/>
            </div>
        </div>
    )
}

export default Header