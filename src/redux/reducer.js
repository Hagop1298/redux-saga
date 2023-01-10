import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_TO_CART} from "./constant"


export const cartData = (data = [], action) => {
    // console.warn("reducer called", action)
    // if (action.type === ADD_TO_CART) {
    //     return data
    // } else {
    //     return "no data called"
    // }
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data]
        case REMOVE_TO_CART:
            data.length = data.length - 1
            return [...data]
        case EMPTY_TO_CART:
            data = []
            return [...data]
        default:
            return data 
    }
}