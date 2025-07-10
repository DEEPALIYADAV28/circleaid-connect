import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar shadow-sm py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className="navbar-left">
          <Link className="navbar-brand fs-5" to="/">
            CircleAid
          </Link>
        </div>

        <div className="navbar-center d-none d-lg-flex">
          <ul className="navbar-nav flex-row gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/Users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/NGOs">NGOs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/Requests">Requests</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/Reports">Reports</Link>
            </li>
            
          </ul>
        </div>

        <div className="navbar-right d-flex gap-2">
          <Link to="/logout">
            <button className="btn btn-outline-danger btn-sm">
              Logout
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
