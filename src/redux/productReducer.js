import { PRODUCT_LIST } from "./constant"


export const productData = (data = [], action) => {
    // console.warn("reducer called", action)
    // if (action.type === PRODUCT_LIST) {
    //     return data
    // } else {
    //     return "no data called"
    // }
    switch (action.type) {
        case PRODUCT_LIST:
            return [action.data]
        default:
            return data
    }
}