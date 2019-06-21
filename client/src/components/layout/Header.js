import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="header-banner">
        <div className="container">
          <div className="row nav-row">
            <Link to="/" className="logo">
              <h4>Social-Network</h4>
            </Link>
            <div className="menu-items">
              <Link to="/login">
                <h6>Login</h6>
              </Link>
              <Link to="/signup">
                <h6>SignUP</h6>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
