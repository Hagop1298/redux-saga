import { PRODUCT_LIST } from './constant'
const productList = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos")
    data = await data.jason()
    console.log("action is called", data);
    return {
        type: PRODUCT_LIST,
        data
    }

}

export default productList;


// import { ADD_TO_CART } from "./constant";
// import { REMOVE_TO_CART } from "./constant";
// import { EMPTY_TO_CART } from "./constant";

// export const addToCart = (data) =>{
//     // console.log("action is called",data);
//     return {
//         type:ADD_TO_CART,
//         data
//     }
// }