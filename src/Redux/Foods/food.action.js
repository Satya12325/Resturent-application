import { GET_FOOD_FAILURE, GET_FOOD_REQUEST, GET_FOOD_SUCCESS } from "./food.actionType"


export const get_food_request = ()=>{
    return{
        type :GET_FOOD_REQUEST
    }
}

export const get_food_success = (payload)=>{
    return{
        type : GET_FOOD_SUCCESS,
        payload : payload
    }
}
export const get_food_failure = ()=>{
    return{
        type : GET_FOOD_FAILURE
    }
}
