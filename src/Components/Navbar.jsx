import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import { logoutApi } from "../Redux/Auth/loginApi";
export default function NavBar() {
    let neviget = useNavigate();
    const [name,setName] = useState("LOG IN");
    const dispatch = useDispatch();
    const {isLogin,isLoading,} = useSelector((state)=>state.auth)

    const handleLogOUt = ()=>{
        if(isLogin){
           
            return  window.localStorage.clear(),dispatch(logoutApi()), neviget("/login");
        }
        return false;
    }
    useEffect(()=>{
        if(isLogin){
            setName("LOG OUt")
        }
        
    },[isLogin,isLoading,name])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food App
          </Typography>
          <Button color="inherit" onClick={handleLogOUt}>{name}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
