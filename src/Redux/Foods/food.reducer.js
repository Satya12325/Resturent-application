import { Fab } from "@mui/material"
import { GET_FOOD_FAILURE, GET_FOOD_REQUEST, GET_FOOD_SUCCESS} from "./food.actionType"

const initState = {
    food : [],
    isLooding : false,
    isError : false

}
export const food_reducer = (state=initState,{type,payload})=>{
    switch(type){
        case GET_FOOD_REQUEST :
            return {
                ...state,
                isLooding : true,
                isError : false
            }
        case GET_FOOD_SUCCESS : 
            return {
                ...state,
                isLooding : false,
                isError : false,
                food : payload
            }
        case GET_FOOD_FAILURE :
            return {
                ...state,
                isLooding : false,
                isError : true
            }

            //DELETE
            
        default :
            return state
    }

}