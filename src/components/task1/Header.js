import React from "react";

function Header() {
  return (
    <>
      {/* Navbar1 */}
      <nav className="navbar navbar-expand-lg bg-warning navbar-light ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#Help" className="nav-link">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a href="#Privacy" className="nav-link">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a href="#Contact" className="nav-link">
                  Legal
                </a>
              </li>
              <li className="nav-item">
                <a href="#Contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#Link" className="nav-link">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Link" className="nav-link">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Link" className="nav-link">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Link" className="nav-link">
                  <i class="fa-brands fa-skype"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Link" className="nav-link">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Navebar2 */}
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 sticky-top">
        <div className="container">
          <a href="#Home" className="navbar-brand">
            <strong>
              Zupa<span className="text-warning">Builder</span>
            </strong>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#Home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#Experts" className="nav-link">
                  Experts
                </a>
              </li>
              <li className="nav-item">
                <a href="#Portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#Blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#Services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#Contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Navebar3 */}

      <ul class="container nav">
        <h2>Experts</h2>
        <li class="nav-item ms-auto">
          <a class="nav-link text-dark" href="#Home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#/">
            /
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#Experts">
            Experts
          </a>
        </li>
      </ul>
    </>
  );
}

export default Header;
