import React from "react";
import styles from './Header.modules.css' 
import { Link } from "react-router-dom";

const Header = () => {
  return <div className={styles.header}>
    <nav className="container"> 
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </nav>
  </div>;
};

export default Header;
