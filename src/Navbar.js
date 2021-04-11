import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    </nav>
  );
};

export default Navbar;
