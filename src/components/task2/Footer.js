import React from "react";
import appStore from "./images/app-store.png";
import playStore from "./images/google-play-store.png";

import "./Footer.css";

function Footer() {
  return (
    <>
      {/* testimonals */}

    
      {/* Customer Support */}

      <div className="container-1 text-center">
     
     <div className="overlay py-5">
      
       <h2 className="text-white py-5">Awesome Customer Support</h2>
       <p className="lead text-white mb-4">
         Have you any query? Don't worry. We have great people ready to help
         you whenever you need it.
       </p>
       <a href="#!" className="btn btn-success bg-white text-success">
         Find out more
       </a>
     </div>
   </div>
      {/* footer 1 */}
      <div className=" bg-light">
        <div className="container py-5">
          <div className="justify-content-center text-center">
            <h2>Get the app</h2>
            <p className="lead mb-4">
              Download our app for the fastest, most convenient way to send &
              get Payment.
            </p>
            <a className="d-inline-flex mx-3" href="#!">
              <img alt="appStore" width="168" height="49" src={appStore} />
            </a>
            <a className="d-inline-flex mx-3" href="#!">
              <img alt="playStore" width="166" height="49" src={playStore} />
            </a>
          </div>
        </div>
      </div>
      {/* footer 2 */}
<div className="container-fluid bg-white">
      <div className="container text-secondary py-5 ">
        <div className="row">
          <div className="col-lg d-lg-flex align-items-center">
            <ul className="nav justify-content-center justify-content-lg-start">
              <li className="nav-item">
                <a className="nav-link active text-secondary" href="#!">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#!">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#!">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#!">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#!">
                  Affiliate
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-secondary" href="#!">
                  Fees
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
            <ul className="nav justify-content-center ">
              <li className="nav-item">
                <a className="nav-link text-muted" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#!">
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-3 pt-lg-2 mt-2">
          <div className="row">
            <div className="col-lg">
              <p className="text-center text-lg-start mb-2 mb-lg-0">
                Copyright &copy; 2022{" "}
                <a href="#!" className="text-success">
                  Payyed
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
              <ul className="nav justify-content-center">
                <li className="nav-item ">
                  <a className="nav-link active text-muted" href="#!">
                    Security
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#!">
                    Terms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#!">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
