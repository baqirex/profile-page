import React from "react";
import { NavLink } from "react-router-dom";

const ProfileContent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item m-2">
              <NavLink className="nav-link navstyle" to="payment">
                Payments
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink className="nav-link navstyle" to="products">
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ProfileContent;
