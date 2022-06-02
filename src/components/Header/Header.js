import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <CustomLink className="nav-link" to="/">
                  HOME
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="/review">
                  REVIEW
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="/dashboard">
                  DASHBOARD
                </CustomLink>
              </li>

              

              <li className="nav-item">
                <CustomLink className="nav-link" to="/about">
                  ABOUT
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="/question">
                    QUESTION
                </CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
