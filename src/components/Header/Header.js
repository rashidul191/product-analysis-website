import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      {/* 
          <nav>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/review">Review</CustomLink>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
              <CustomLink to="/about">About</CustomLink>

          </nav>
 */}

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <CustomLink class="nav-link" to="/">
                  Home
                </CustomLink>
              </li>
              <li class="nav-item">
                <CustomLink class="nav-link" to="/review">
                  Review
                </CustomLink>
              </li>
              <li class="nav-item">
                <CustomLink class="nav-link" to="/dashboard">
                  Dashboard
                </CustomLink>
              </li>
              <li class="nav-item">
                <CustomLink class="nav-link" to="/about">
                  About
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
