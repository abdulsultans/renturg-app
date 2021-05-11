import React from "react";
import "./Header.css";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";
import logo from "../../assets/renturg-logo.png";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={logo} alt="RentUrg" />
      </Link>

      
      <div className="header__right">
        <div className="btn">
          <button><Link to="/join">Join</Link></button>
          <button><Link to="/login">Log In</Link></button>
          </div>
        
        <LanguageIcon />
    
      </div>
    </div>
  );
}

export default Header;
