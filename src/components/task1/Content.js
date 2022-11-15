import React from "react";

function Content() {
  return (
    <>
      {/* main1 */}
      <section class="bg-white text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start my-5">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                meet our <span class="text-warning">experts</span>
              </h1>
              <p class="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
            </div>
            <img 
              class="img-fuid h-25 w-50 d-none d-sm-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9tmYA4TVAEwy8asf_AKBtUaQm3ay6JM08g&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* label */}
      <div className="container-fluid rounded bg-warning text-center d-flex justify-content-center text-white py-4">
        <div className="container row g-4 text-center">
          <div className="col-md-6 col-lg-3">
            <h3>3200+</h3>
            <hr
              style={{
                border: "1px solid",
                borderRadius: "1px",
                width: "15%",
                margin: "auto",
                opacity: "100",
              }}
            />
            <p>Completed Projects</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>4900</h3>
            <hr
              style={{
                border: "1px solid",
                borderRadius: "1px",
                width: "15%",
                margin: "auto",
                opacity: "100",
              }}
            />
            <p>Built Houses</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>6000</h3>
            <hr
              style={{
                border: "1px solid",
                borderRadius: "1px",
                width: "15%",
                margin: "auto",
                opacity: "100",
              }}
            />
            <p>Satisfied Customers</p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h3>1900</h3>
            <hr
              style={{
                border: "1px solid",
                borderRadius: "1px",
                width: "15%",
                margin: "auto",
                opacity: "100",
              }}
            />
            <p>Cups of Coffee</p>
          </div>
        </div>
      </div>
      {/* main2 */}
      <section id="instructors" className="p-5 bg-light">
        <div className="container">
          <h2 className="text-center text-dark">Our Team</h2>
          <p className="lead text-center text-dark mb-5">
            Our instructors all have 5+ years working as a Architecture in the
            industry
          </p>

          <div className="row g-4" >



            <div className="col-md-6 col-lg-3">
              <div className="text-center position-relative">
                <img  style={{height:"300px" , width:"300px"}}
                  className="img-fluid rounded"
                  src="https://media-exp1.licdn.com/dms/image/C4D12AQG4qDgFjVTslA/article-cover_image-shrink_720_1280/0/1612263568001?e=2147483647&v=beta&t=4OCibPSg7S9MN4qDXNxQeF6IW-EPHkQEpbuXZ_bqZDk"
                  alt=""
                />

                <div className="ms-auto text-dark position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-evenly ">
                  <a href="#Link" className="me-2 p-2  px-2 bg-warning text-dark">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#Link" className="me-2 py-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#Link" className="me-2 p-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#Link" className=" me-2 p-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-google-plus-g"></i>
                  </a>
                  <a href="#Link" className=" p-2 px-2 bg-warning text-dark">
                    <i class="fa-regular fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="text-center text-secondary"><h3>Prakash</h3>Tech Lead</div>
            </div>



            <div className="col-md-6 col-lg-3">
              <div className="text-center position-relative">
                <img  style={{height:"300px" , width:"300px"}}
                  className="img-fluid rounded"
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt=""
                />

                <div className="ms-auto text-dark position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-evenly">
                <a href="#Link" className="me-2 p-2  px-2 bg-warning text-dark">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#Link" className="me-2 py-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#Link" className="me-2 p-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#Link" className=" me-2 p-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-google-plus-g"></i>
                  </a>
                  <a href="#Link" className=" p-2 px-2 bg-warning text-dark">
                    <i class="fa-regular fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="text-center text-secondary"><h3>Prakash</h3>Tech Lead</div>
            </div>




            <div className="col-md-6 col-lg-3">
              <div className="text-center position-relative">
                <img  style={{height:"300px" , width:"300px"}}
                  className="img-fluid rounded"
                  src="https://www.selby.ac.uk/assets/careers/_1200x630_crop_center-center_82_none/iStock-1180336584.jpg?mtime=1612450695"
                  alt=""
                />

                <div className="ms-auto text-dark position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-evenly">
                <a href="#Link" className="me-2 p-2  px-2 bg-warning text-dark">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#Link" className="me-2 py-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#Link" className="me-2 p-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#Link" className=" me-2 p-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-google-plus-g"></i>
                  </a>
                  <a href="#Link" className=" p-2 px-2 bg-warning text-dark">
                    <i class="fa-regular fa-envelope"></i>
                  </a>
                  
                </div>
              </div>
              <div className="text-center text-secondary"><h3>Prakash</h3>Tech Lead</div>
            </div>




            <div className="col-md-6 col-lg-3">
              <div className="text-center position-relative">
                <img  style={{height:"300px" , width:"300px"}}
                  className="img-fluid rounded"
                  src="https://www.usnews.com/dims4/USNEWS/2efc22b/2147483647/crop/418x274%2B0%2B0/resize/640x420/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fc1%2Faae354802f5cc40b6fcd70d056adbc%2Fjobs-job-photo-42.jpg"
                  alt=""
                />

                <div className="ms-auto text-dark position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-evenly">
                <a href="#Link" className="me-2 p-2  px-2 bg-warning text-dark">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#Link" className="me-2 py-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#Link" className="me-2 p-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#Link" className=" me-2 p-2 px-2 bg-warning text-dark">
                    <i class="fa-brands fa-google-plus-g"></i>
                  </a>
                  <a href="#Link" className=" p-2 px-2 bg-warning text-dark">
                    <i class="fa-regular fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="text-center text-secondary"><h3>Prakash</h3>Tech Lead</div>
            </div>



          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
