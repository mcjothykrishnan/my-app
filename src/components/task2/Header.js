import React from "react";
import logo from "./images/logo.png";
import image1 from "./images/image-1.jpg";
import image3 from "./images/image-3.jpg";

function Header() {
  return (
    <>

{/* Navbar */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#!">
      <img src={logo} alt="" width="121" height="33"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#!">Send</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">Receive</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">Fees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">Help</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#!1" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#!">Action</a></li>
            <li><a class="dropdown-item" href="#!">Another action</a></li>
            <li><a class="dropdown-item" href="#!">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#!2" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
            <li><a class="dropdown-item" href="#!">Action</a></li>
            <li><a class="dropdown-item" href="#!">Another action</a></li>
            <li><a class="dropdown-item" href="#!">Something else here</a></li>
          </ul>
        </li>
      </ul>

    </div>



    <nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start">
    
    <button class="btn btn-sm  me-2" type="button">LOGIN</button>
    <button class="btn btn-outline-success bg-success text-white" type="button">SIGN UP</button>
  </form>
</nav>
  </div>
</nav>

{/* Carousal */}
      <div
        id="myCarousel"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={image1}
              alt="Los Angeles"
              class="d-block"
              style={{ width: "100%", height: "675px" }}
            />

            <div class="container">
              <div class="carousel-caption">
                <h1>Send & Receive Money</h1>
                <p>
                Quickly and easily send, receive and request money online with Payyed.
                </p>
                <p>
                  <a class="btn btn-lg btn-success" href="#!">
                    Open a Free Account
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src={image3}
              alt="Los Angeles"
              class="d-block"
              style={{ width: "100%", height: "675px" }}
            />
            <div class="container">
              <div class="carousel-caption  text-start">
                <h1>Trusted by more than 50,000 businesses worldwide.</h1>
                <p>
                Over 180 countries and 120 currencies supported.
                </p>
                <p>
                  <a class="btn btn-lg btn-success" href="#!">
                  Get started for free
                  </a>
                </p>
              </div>
            </div>
          </div>

         
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Header;
