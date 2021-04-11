import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
      </ul>
      <LoginButton />
    </nav>
  );
};

export default Navbar;
