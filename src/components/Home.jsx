// import React from 'react'

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";
import pp from "../assets/pp.jpg";
import pp1 from "../assets/imageslide1.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="#Home">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "white", marginLeft: "48px", fontSize: "29px" }}
          >
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Register"
                  style={{
                    color: "white",
                    marginLeft: "40px",
                    fontSize: "20px",
                  }}
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Login"
                  style={{
                    color: "white",
                    marginLeft: "40px",
                    fontSize: "20px",
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  borderRadius: "60px",
                  position: "relative",
                  left: "-30px",
                }}
              />
            </form>
          </div>
        </div>
      </nav>

      <br />

      {/* Carousel */}
      <div
        id="carouselExampleAutoplaying"
        data-bs-ride="carousel"
        className="carousel slide"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pp1} className="d-block w-100 " alt="..." />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{ marginTop: 170 }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          style={{ marginTop: 176 }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />

      {/* Image Thumbnails */}
      <div className="rectangle">
        <br />
        <br />
        <br />
        <div>
          <img src={pp} className="img-thumbnail" alt="..." />
          <img src={pp} className="img-thumbnail" alt="..." />
          <img src={pp} className="img-thumbnail" alt="..." />
          <img src={pp} className="img-thumbnail" alt="..." />
          <br />
          <br />
          <img src={pp} className="img-thumbnail" alt="..." />
          <img src={pp} className="img-thumbnail" alt="..." />
          <img src={pp} className="img-thumbnail" alt="..." />
          <img src={pp} className="img-thumbnail" alt="..." />
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
