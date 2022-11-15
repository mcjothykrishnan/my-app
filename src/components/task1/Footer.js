import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-lg-start text-white">
        <div className="container text-center text-md-start">
          <div className="row py-5">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold">About us</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                style={{ width: "60px", height: "2px", opacity: "100" }}
              />
              <p className="text-secondary">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
              <div className="ms-auto d-flex">
                <a href="#Link" className="p-2  m-1 bg-light  text-dark">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#Link" className="p-2 m-1 bg-white text-dark">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#Link" className="p-2 m-1 bg-white text-dark">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#Link" className="p-2 m-1 bg-white text-dark">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#Link" className="p-2 m-1 bg-white text-dark">
                  <i class="fa-regular fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold">Instagram widgets</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                style={{ width: "60px", height: "2px", opacity: "100" }}
              />

              <div className="d-flex mb-2 img-fluid">
                <div className="col-4">
                  <img
                    className=""
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className=""
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className=""
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </div>
              </div>

              <div className="d-flex img-fluid">
                <div className="col-4">
                  <img
                    className=""
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className=""
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </div>
                <div className="col-4">
                  <img
                    className=""
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold">Twitter posts</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                style={{ width: "60px", height: "2px", opacity: "100" }}
              />

              <p class="text-secondary text-center">
                {" "}
                <span class="text-warning">
                  <i class="fa-brands fa-twitter"></i>
                </span>{" "}
                praesentium non corporis totam maiores! Placeat
                <i class="text-warning">httt./wjye/wen</i>
                <br />
                <br />
                <span class="text-warning">
                  <i class="fa-brands fa-twitter"></i>
                </span>{" "}
                laborum corrupti quaerat minus m fugit, molesti
                <i className="text-warning">httt./wjye/wen</i>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold">Short navigation</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                style={{ width: "60px", height: "2px", opacity: "100" }}
              />
              <div className="ms-auto mb-4 text-start">
                <div className="">
                  <a
                    href="#Home"
                    className="text-secondary"
                    style={{ textDecoration: "none", wordSpacing: "15px" }}
                  >
                    <i className="fa-solid fa-greater-than"></i> Home
                  </a>
                </div>
                <div className="">
                  <a
                    href="#Home"
                    className="text-warning"
                    style={{ textDecoration: "none", wordSpacing: "15px" }}
                  >
                    <i className="fa-solid fa-greater-than"></i> Experts
                  </a>
                </div>
                <div className="">
                  <a
                    href="#Home"
                    className="text-secondary"
                    style={{ textDecoration: "none", wordSpacing: "15px" }}
                  >
                    <i className="fa-solid fa-greater-than"></i> Portfolio
                  </a>
                </div>
                <div className="">
                  <a
                    href="#Home"
                    className="text-secondary"
                    style={{ textDecoration: "none", wordSpacing: "15px" }}
                  >
                    <i className="fa-solid fa-greater-than"></i> Blog
                  </a>
                </div>
                <div className="">
                  <a
                    href="#Home"
                    className="text-secondary"
                    style={{ textDecoration: "none", wordSpacing: "15px" }}
                  >
                    <i className="fa-solid fa-greater-than"></i> Services
                  </a>
                </div>
                <div className="">
                  <a
                    href="#Home"
                    className="text-secondary"
                    style={{ textDecoration: "none", wordSpacing: "15px" }}
                  >
                    <i className="fa-solid fa-greater-than"></i> Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3 sticky-bottom"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Copyright © 2022 All right reserved by<span> </span>
          <a className="text-white" href="#">
            JothyKrishnanMC
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
