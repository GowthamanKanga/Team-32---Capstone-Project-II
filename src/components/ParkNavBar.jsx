import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ParkNavBar.css";

class ParkNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md NavBar">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <Link className="nav-link" to="/parkPage">
                  Park Info{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/facilities">
                  Facilities{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event">
                Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                    Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default ParkNavbar;



