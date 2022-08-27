import React from "react";
import { withRouter } from "react-router";
import { Row, Col, Popover } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./HomeSlider.scss";


const Mainslidersettings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

class HomeSlider extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <!--Main Slider section starts--> */}
        <div className="archmedia-slider">
          <div className="slider-content ">
            {/* <!--Slider Item starts--> */}
            <Slider {...Mainslidersettings}>
              <div className=" item slider-1">
                <div className="center-contents w-100">
                  <div className=" middle-content ">
                    <div className="container mx-auto slider-caption">
                      <h1 className="text-white text-center">
                        Sri Arch Media
                        <span className="d-block">Film and entertainment industry.</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Slider Item ends--> */}

               
            </Slider>
          </div>
        </div>
        {/* <!--Main Slider section ends--> */}
      </React.Fragment>
    );
  }
}
export default withRouter(HomeSlider);
