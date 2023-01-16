import { addToCart } from '../redux/action'
import { useDispatch } from 'react-redux';
import { RemoveToCart } from '../redux/action';
import { EmptyToCart } from '../redux/action';
import {productList} from '../redux/productActions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Main() {
  const dispatch = useDispatch()
  let data = useSelector((state) => state.productData)

  console.log(data, "data")


  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div>
      <div>
        <button onClick={() => { dispatch(EmptyToCart()) }}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div key={item.id} className='product-item'>
            <img alt='##' width="150px" height="150px" src={item.image} />
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>Brand : {item.brand}</div>
            <div>
              <button onClick={() => { dispatch(addToCart(item)) }}>Add to cart</button>
              <button onClick={() => { dispatch(RemoveToCart(item.id)) }}>Remove from cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
