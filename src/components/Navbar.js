import { useState } from "react";
import "../styles.css";

//components
import Switch from "./Switch";

const Navbar = (props) => {
  return (
    <nav>
      <h1>ReactFacts</h1>
      <h2>React Course - Project 1</h2>
      <Switch darkMode={props.toggleDarkMode} />
    </nav>
  );
};
export default Navbar;
