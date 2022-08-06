import {combineReducers} from "redux";
import { Auth_reducer } from "./Auth/Auth.reducer";
import {food_reducer} from "./Foods/food.reducer"

export const rootReducer = combineReducers({
    auth : Auth_reducer,
    food:  food_reducer, 
})