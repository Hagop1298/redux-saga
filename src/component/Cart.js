import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartData = useSelector((state) => state.cartData)
  // console.log(cartData, "cartData");
  return (
    <div>
      <Link to='/'>Go to Products Page</Link>
      <h1>Cart Page</h1>
      <div className='cart-page-container'>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Color</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Category</td>
            </tr>
          </thead>
          {
            cartData.map((item) => <tbody key={item.key}><tr>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr></tbody>)
          }
        </table>
      </div>
    </div>
  )
}

export default Cart