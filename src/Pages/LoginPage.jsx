import axios from "axios";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../Components/Login";
import { loginApi } from "../Redux/Auth/loginApi";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';

function LoginPage() {
  const dispatch = useDispatch();
  const { isLogin, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  let neviget = useNavigate();
  const handleLogin = ({ username, password }) => {
    dispatch(loginApi({ username, password }));
  };

    useEffect(()=>{
        if (isLogin) {
          return neviget("/");
        }
        
    },[isLogin,isLoading])
    // if (isLoading) {
    //   return <div>...loading</div>;
    // }
//   if (isLogin) {
//     return neviget("/");
//   }
  return (
    <div className="loginPage">
      <Login handleLogin={handleLogin} />
      {isLoading && <div><CircularProgress color="inherit"/></div>}
      {isError && <div> something went wrong </div>}
    </div>
  );
}

export { LoginPage };
