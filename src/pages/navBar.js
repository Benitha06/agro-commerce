import React from "react";
import './navBar.css'


function NavBar(){
    return(
        <div className="nav">
            <h1>SBM BANK</h1>
       <ul>
        <li><a href="/home">Home</a> </li>
        <li><a href="/about">About</a> </li>
        <li><a href="/service">Service</a> </li>
       
       </ul>
</div>
    )
}

export default NavBar;