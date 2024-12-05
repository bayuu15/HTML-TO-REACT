import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"; 
import Login from "./components/Login.jsx"; 
import Register from "./components/Register"; 


  
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} /> 
   
      </Routes>
    </Router>
   );
  
  };

// const App = () => {
  
//   return (
//     <>
//       <Home />
//       <Login />
    
//     </>
//   );
// };


export default App;