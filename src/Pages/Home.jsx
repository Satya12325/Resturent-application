import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import { Cards } from '../Components/Cards';
import {foodapi} from "../Redux/Foods/food.api";

export const Home = () => {
  const [data,setData] = useState([])
    let neviget = useNavigate();
    const dispatch = useDispatch();
    const {isLogin,isLoading} = useSelector((state)=>state.auth)
    const {isLooding,food} = useSelector((state)=>state.food)
    useEffect(()=>{
        if(!isLogin){
            return neviget("/login")
        }
         dispatch(foodapi());
       
    },[isLogin,isLoading])
  //   if(!isLogin){
  //     return neviget("/login")
  // }
  console.log(food,"data")
  // if(isLoading){
  //   return <div>Loading...</div>
  // }
  return (
    <div className="HomeCard">
    {
      food?.map((item)=>(
        <Cards
        {...item}
        />
      ))
    }
      
    </div>
  )
}

