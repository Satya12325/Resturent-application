import { get_food_failure, get_food_request, get_food_success } from "./food.action"
import axios from "axios";
export const foodapi = (params)=>(dispatch)=>{
    dispatch(get_food_request())
    axios
    .get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
    .then((res)=>{
        console.log(res.data)
        dispatch(get_food_success(res.data))
    })
    .catch((err)=>{
        dispatch(get_food_failure())
        console.log(err)
    })

}
