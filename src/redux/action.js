import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART } from "./constant";
import { EMPTY_TO_CART } from "./constant";

export const addToCart = (data) =>{
    // console.log("action is called",data);
    return {
        type:ADD_TO_CART,
        data
    }
}

export const RemoveToCart = (data) =>{
    // console.warn("remove",data);
    return {
        type:REMOVE_TO_CART,
        data
    }
}

export const EmptyToCart = (data) =>{
    // console.warn("remove",data);
    return {
        type:EMPTY_TO_CART,
    }
}