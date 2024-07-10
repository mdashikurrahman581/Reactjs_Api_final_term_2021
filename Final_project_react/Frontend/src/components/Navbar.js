import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold fs-4" to="/">AY COLLECTION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="btn btn-outline-dark ms-2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-dark ms-2" aria-current="page" to="/products">All products</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-dark ms-2" to="/addproduct">Add Products</Link>
        </li>
          
      </ul>
      <div className="buttons">
         <Link to="/logout" className="btn btn-outline-dark">
         <i className="fa fa-sign-in me-1"></i>Logout</Link>


     </div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar;
