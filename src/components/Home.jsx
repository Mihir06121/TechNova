import React from "react";
import '../components/home.css'

const Header = () =>  {

  return (
    <header id="header">
      <div align="center" className="intro pt-5 pb-5">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="text-white col-md-8 col-md-offset-2">
                <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
                  TECHNOVA-21
                </h1>
                <p data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="400">
                  Tag Line
                </p>
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                  <a href="#about" className="btn btn-custom btn-lg page-scroll">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
