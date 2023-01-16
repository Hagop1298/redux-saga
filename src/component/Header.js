import React from 'react'
import image from '../images/1.png'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { productSearch } from '../redux/productActions'
const Header = () => {
    const result = useSelector((state) => state.cartData)
    // console.warn("data in header",result);
    const dispatch = useDispatch()
    return (
        <div className='header'>
        <Link to='/'><h1 className='logo'>E-Comm</h1></Link>
        <div className='search-box'>
            <input type="text" onChange={(event)=> dispatch(productSearch(event.target.value))} placeholder='Search Product'/>
        </div>
            <Link to='/cart'>
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src={image} alt="somePhoto" />
                </div>
            </Link>
        </div>
    )
}

export default Header