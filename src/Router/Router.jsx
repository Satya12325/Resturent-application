import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import {Home} from "../Pages/Home";
import {LoginPage} from '../Pages/LoginPage'


export const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>

    )
}