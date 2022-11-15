import React from "react";
import howWork from "./images/how-work.jpg";
import grid1 from "./images/anyone-freelancer.jpg";
import grid2 from "./images/anyone-online-shopping.jpg";
import grid3 from "./images/anyone-online-sellers.jpg";
import grid4 from "./images/anyone-affiliate-marketing.jpg";
import "./Content.css";
function Content() {
  return (
    <>
      {/* card */}
      <div className="container-fluid bg-white">
        <div className="container py-5">
          <h2 className="text-9 text-center">Why should you choose Payyed?</h2>
          <p className="lead text-center mb-5">
            Here Top 4 reasons why using a Payyed account for manage your money.
          </p>
          <div className="row ">
            <div className="col-sm-6 col-lg-3">
              <div className=" text-success">
                <i className="fas fa-hand-pointer fa-2x"></i>
              </div>
              <h3>Easy to use</h3>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
              <a href="#!" className="text-decoration-none text-success">
                Learn more<i className="fas fa-chevron-right ms-2"></i>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className=" text-success">
                <i className="fas fa-share fa-2x"></i>
              </div>
              <h3>Faster Payments</h3>
              <p>
                Persius interesset his et, in quot quidam persequeris vim, ad
                mea essent possim iriure.
              </p>
              <a href="#!" className="text-decoration-none text-success">
                Learn more<i className="fas fa-chevron-right ms-2"></i>
              </a>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className=" text-success">
                <i className="fas fa-dollar-sign fa-2x"></i>
              </div>
              <h3>Lower Fees</h3>
              <p>
                Essent lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure.
              </p>
              <a href="#!" className="text-decoration-none text-success">
                Learn more<i className="fas fa-chevron-right ms-2"></i>
              </a>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className=" text-success">
                <i className="fas fa-lock fa-2x"></i>
              </div>
              <h3>100% secure</h3>
              <p>
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure.
              </p>
              <a
                href="#!"
                className="btn-link text-3 text-decoration-none text-success"
              >
                Learn more<i className="fas fa-chevron-right text-1 ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* grid */}
      {/* <div className="container-fluid bg-light ">
        <div className="row ">
          <div className="col-lg-6 col-xl-6 d-flex">
            <div className="my-auto ">
              <h2 className="text-center">Payment Solutions for everyone.</h2>
              <p className="text-center">
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure. lisque persius interesset his et, in quot quidam
                mea essent possim iriure.
              </p>
              <a href="#!" className=" text-success text-decoration-none ">
                Find more solution
                <i className="fas fa-chevron-right text-2 ms-2"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6 d-flex justify-content-end">
            <div className="row g-0">
              <div className="col-12 col-sm-6 text-center">
                <div className="grids w-100">
                  <img src={grid1} alt="Avatar" className="h-100 w-100" />
                  <div className="overim py-2">Freelancer</div>
                </div>
              </div>

              <div className="col-12 col-sm-6 text-center">
                <div className="grids w-100">
                  <img src={grid2} alt="Avatar" className="h-100 w-100" />
                  <div className="overim py-2">Online Shopping</div>
                </div>
              </div>

              <div className="col-12 col-sm-6 text-center">
                <div className="grids w-100">
                  <img src={grid3} alt="Avatar" className="h-100 w-100" />
                  <div className="overim py-2">online Sellers</div>
                </div>
              </div>

              <div className="col-12 col-sm-6 text-center">
                <div className="grids w-100">
                  <img src={grid4} alt="Avatar" className="h-100 w-100" />
                  <div className="overim py-2">Affiliate Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* grid2 */}
      <div className="container-fluid bg-light">
        <div className="row d-flex ">
          <div className="col-md-6 d-flex ">
            <div className="row d-flex flex-column justify-content-center align-items-center w-100 text-align-center">
              <div className="col-md-6 w-100 d-flex justify-content-center">
                <h1>Payment solution for anyone</h1>
              </div>
              <div className="col-md-6  w-75 d-flex justify-content-center text-center">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6  p-0">
                <div className="card border-0">
                  <div className="card-image position-relative   ">
                    <img className="system w-100 h-100 " src={grid1} alt="grid" />
                    <div className="card-img-overlay position-absolute d-flex justify-content-center align-items-end  p-0 ">
                      <div className="text-white  d-flex justify-content-start w-100 p-2 overim">
                        Freelancer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6  p-0">
                <div className="card border-0">
                  <div className="card-image position-relative   ">
                    <img className="system w-100 h-100 " src={grid2}  alt="grid" />
                    <div className="card-img-overlay position-absolute d-flex justify-content-center align-items-end  p-0 ">
                      <div className="text-white bg-opacity-75 d-flex justify-content-start w-100 p-2 overim">
                        Online Shopping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6  p-0">
                <div className="card border-0">
                  <div className="card-image position-relative   ">
                    <img className="system w-100 h-100 " src={grid3}  alt="grid" />
                    <div className="card-img-overlay position-absolute d-flex justify-content-center align-items-end  p-0 ">
                      <div className="text-white bg-opacity-75 d-flex justify-content-start w-100 p-2 overim">
                        Online Sellers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6  p-0">
                <div className="card border-0">
                  <div className="card-image position-relative   ">
                    <img className="system w-100 h-100 " src={grid4}  alt="grid" />
                    <div className="card-img-overlay position-absolute d-flex justify-content-center align-items-end  p-0 ">
                      <div className="text-white bg-opacity-75 d-flex justify-content-start w-100 p-2 overim">
                        Affiliate Marketing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card-2 */}
      <div className="container-fluid bg-white">
        <div className="container py-5">
          <h2 className="text-9 text-center">What can you do with Payyed?</h2>
          <p className="lead text-center mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <a href="#!" className="text-decoration-none">
                <div className="card text-center">
                  <h1 className="m-5 text-success">
                    <i className="fas fa-share-square"></i>
                  </h1>
                  <div className="card-body text-dark text-center bg-light p-0">
                    <h4>Send money</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a href="#!" className="text-decoration-none">
                <div className="card text-center">
                  <h1 className="m-5 text-success">
                    <i className="fas fa-check-square"></i>
                  </h1>
                  <div className="card-body text-dark text-center bg-light p-0">
                    <h4>Receive money</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a href="#!" className="text-decoration-none">
                <div className="card text-center">
                  <h1 className="m-5 text-success">
                    <i className="fas fa-user-friends"></i>
                  </h1>
                  <div className="card-body text-dark text-center bg-light p-0">
                    <h4>Pay a Friend</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a href="#!" className="text-decoration-none">
                <div className="card text-center">
                  <h1 className="m-5 text-success">
                    <i className="fas fa-shopping-bag"></i>
                  </h1>
                  <div className="card-body text-dark text-center bg-light p-0">
                    <h4>Online Shopping</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="text-center mt-5">
            <a
              href="#!"
              className="btn-link text-4 text-decoration-none text-success"
            >
              See more can you do
              <i className="fas fa-chevron-right text-2 ms-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Frame videos */}
      <div className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="card bg-dark-3 shadow-sm border-0">
                <img
                  className="card-img img-fluid"
                  src={howWork}
                  width="570"
                  height="362"
                  alt="banner"
                />
                <div className="card-img-overlay p-0">
                  <a className="d-flex h-100 text-success" href="#!">
                    <span className=" bg-white m-auto">
                      <i className="fas fa-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="ms-4">
                <h2 className="text-9">How does it work?</h2>
                <p className="text-4">
                  Quidam lisque persius interesset his et, in quot quidam
                  persequeris essent possim iriure. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
                <ul className="list-unstyled text-3 lh-lg">
                  <li>
                    <i className="fas fa-check me-2"></i>Sign Up Account
                  </li>
                  <li>
                    <i className="fas fa-check me-2"></i>Receive & Send Payments
                    from worldwide
                  </li>
                  <li>
                    <i className="fas fa-check me-2"></i>Your funds will be
                    transferred to your local bank account
                  </li>
                </ul>
                <a
                  href="#!"
                  className="btn btn-outline-success shadow-none mt-2 "
                >
                  Open a Free Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
