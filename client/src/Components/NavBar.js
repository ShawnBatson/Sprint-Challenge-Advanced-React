import React from "react";
import { useDarkMode } from "./DarkMode";
import "../App.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    // <nav className="navbar">
    <div className="dark-mode__toggle">
      <div
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      />
      <h6> Dark Mode</h6>
    </div>
    // </nav>
  );
};

export default Navbar;
