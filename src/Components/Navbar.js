import React from 'react';
import {NavLink } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
        <div className="container-fluid  bg-light">
            <div className="row">
                <div className="col-10 mx-auto">

                
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">React project</NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav p-3  ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active"  to="/">Home</NavLink >
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link active " to="services">services</NavLink>
        </li><li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link active" to="about">about</NavLink >
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link active " to="contact">contact</NavLink >
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
</>
    );
};

export default Navbar;