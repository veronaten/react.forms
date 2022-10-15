import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <div className="header">
      <div className="container">
        <ul className="header__links">
          <li>
            <NavLink
              to="about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="forms"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Forms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="not-found"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Page not found
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
