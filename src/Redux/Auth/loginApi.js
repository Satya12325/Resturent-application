import { login_success,login_failure,login_request } from "./Auth.action"
import { logout } from "./Auth.action"
import axios from "axios";
export const loginApi = (params)=>(dispatch)=>{
    dispatch(login_request())
    console.log(params,"params","dispatc")

    axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json")
    .then((res) => {
    
    console.log(res.data)
    const data = res.data;
    let name = true;
    for(let i=0;i<data.length;i++) {
        if(data[i].username === params.username && data[i].password === params.password) {
            dispatch(login_success(params))
            name=false;
        }
        else{
            dispatch(login_request())
        }
    }
    if(name){
        dispatch(login_failure())
    }
  })
  .catch((err) => {
   console.log(err);
   
  });
   

}
export const logoutApi = ()=>(dispatch)=>{
    dispatch(logout())
}