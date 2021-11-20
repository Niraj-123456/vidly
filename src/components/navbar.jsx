import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge rounded-pill bg-primary">8</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
