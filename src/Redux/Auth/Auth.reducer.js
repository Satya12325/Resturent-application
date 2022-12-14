import {loadData,saveData} from "../../Utils/localStorage";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./Auth.actionType";
const initState = {
    isLogin : loadData("token") ? true : false,
    token : loadData("token") || "",
    isLoading : false,
    isError : false
}

export const Auth_reducer = (state=initState,{type,payload})=>{
switch(type){
    case LOGIN_REQUEST :
        return{
            ...state,
            isLoading: true,
        isError: false
        }
    case LOGIN_SUCCESS :
        console.log("a.a.11",payload)
        saveData("token", payload.password);
        return{
            ...state,
            isLoading : false,
            isError : false,
            isLogin : true,
            token : payload

        }
    case LOGIN_FAILURE :
        return{
            ...state,
            isLogin: false,
            token: "",
            isError: true,
            isLoading: false
        }
    case LOGOUT :
        saveData("token","")
        return{
                ...state,
                isLoading : false,
                isError : false,
                token : "",
                isLogin : false

        }
    default :
        return state
}
}