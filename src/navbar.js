import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className="navbar">
      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
        
        <a href='#/'>Home </a>
        <a href="#/login">LogIn</a>
        <a href='#/createaccount'>Create Account</a>
        <a href='#/deposit'>Deposit</a>
        <a href='#/withdraw'>Withdraw</a>
        <a href="#/alldata">All Data</a>
      </div>
      <div>
        
      </div>
    </div>
    </>
  );
}

export default Navbar;
  