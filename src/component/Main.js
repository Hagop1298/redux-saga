import { addToCart } from '../redux/action'
import { useDispatch } from 'react-redux';
import { RemoveToCart } from '../redux/action';
import { EmptyToCart } from '../redux/action';
import productList from '../redux/productActions';
import { useSelector } from 'react-redux';
function Main() {
  const dispatch = useDispatch()
  let data = useSelector((state)=>state)
  // const product = {
  //   name: 'iphone',
  //   category: 'mobile',
  //   price: 1000,
  //   color: 'black'
  // }
  return (
    <div>
      <div>
        <button onClick={() => { dispatch(addToCart()) }}>Add To Cart</button>
        {/* <button onClick={() => { dispatch(addToCart(product)) }}>Add To Cart</button> */}
      </div>
      <div>
        <button onClick={() => { dispatch(RemoveToCart()) }}>Remove From Cart</button>
      </div>
      <div>
        <button onClick={() => { dispatch(EmptyToCart()) }}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => { dispatch(productList()) }}>Call Product Lis t</button>
      </div>
    </div>
  );
}

export default Main;
