import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../home'
import About from '../about'
import Service from '../service'

function Index (){
    return(
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>


    );
}
export default Index;