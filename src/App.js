import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './pages/comp/index'
import NavBar from './pages/navBar'
import Nav from './pages/nav'

function App() {
   
   return(
      <Router>
        <NavBar/>
        <Nav/>
        <Index/>          
      </Router>
        )  

   
}

export default App;
 