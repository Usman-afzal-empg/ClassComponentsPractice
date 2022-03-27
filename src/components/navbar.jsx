import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/class-component">ClassComponent</Link>
      <Link to="/functional-component" style={{ paddingLeft: "30px" }}>
        Functional Component
      </Link>
    </div>
  );
}

export default Navbar;
