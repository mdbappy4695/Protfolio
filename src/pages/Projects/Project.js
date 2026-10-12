import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import { Rotate } from "react-reveal";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
       Here are some of my most recent full-stack and front-end projects built
          using technologies like React, Node.js, Express, MongoDB, and Next.js.
          Each project demonstrates my ability to design responsive user
          interfaces, manage APIs efficiently, and deliver complete web
          applications with clean and scalable code.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Rotate top left>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src="images/ecommerce website.png" alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Shopping Website</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://ecommerce-backend-cadu.onrender.com/?fbclid=IwAR3d-Q-FueF8kEUjU8mYbUALy3IXwUfCSAkg8IpwS_BQanDPRp4g1jTggZE"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack</span>
                  <img src="images/expense.jpg" alt="expense_pic" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">CRUD</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Expense System management
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://transcendent-caramel-a1746f.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Blog app</span>
                  <img src="images/blogapp.png" alt="blogapp_pic" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">CRUD</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Blog app</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://funny-lollipop-8459fb.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack</span>
                  <img src="images/doctor-appointment.png" alt="blogapp_pic" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Doctor Appointment App</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://doctor-appointment-au4p.onrender.com"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Next js</span>
                  <img src="images/imd.png" alt="blogapp_pic" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Axios API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">IMDB CLONE</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://delightful-cajeta-7f00f8.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">TicTacTo game</span>
                  <img src="images/tic-tac-too.png" alt="tic-tac-too_pic" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React JS</span>

                  <span className="card-detail-badge">Responsive</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Tic Tac Too App</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://tictactoo123.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Todo App</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Js</span>
                  <span className="card-detail-badge">React Redux</span>

                  <span className="card-detail-badge">CRUD</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Todo App</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://6532a086485e011f5305bd45--stellar-biscochitos-1cde3a.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Weather App</span>
                  <img src="images/weather.png" alt="blogapp_pic" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>

                  <span className="card-detail-badge">Fetch API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">IMDB CLONE</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://genuine-kitten-edf436.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Rotate>
        </div>
      </div>
    </>
  );
};

export default Projects;
