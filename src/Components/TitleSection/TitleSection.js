import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./TitleSection.scss";
import scrollDown from "../../assets/images/icons/mouse-icon.svg";
import Slider from "react-slick";
import { Fade, Zoom } from "react-reveal";

const TitleSliderSettings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "ease-in-out",
  touchThreshold: 100,
};

class TitleSection extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className={`text-center top-banner p-mob ${this.props.className}`}
        >
          <Slider {...TitleSliderSettings}>
            {this.props.sliderImages.map((image, i) => (
              <div className="list" key={i}>
                <img src={image} className="zoom-in-effect" alt="" />
              </div>
            ))}
          </Slider>
          {/* <div className="container mx-auto ">
                <div className="center-contents w-100">
                    <div className="middle-content">
                        <div className="caption mt-sm-3 mt-lg-5 pt-sm-1 pt-lg-3">
                            <Fade>
                                <p className="text-white text-uppercase mb-3 mb-lg-4">{this.props.welcomeText}</p>
                            </Fade>
                            <Fade>
                                <h1 className="text-white mb-3 mb-lg-4">{this.props.titleName}</h1>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="move-down">
                    <Zoom bottom>
                        <img src={scrollDown} alt="Move to another section" />
                    </Zoom>
                </div>
                
            </div> */}
          <div className="center-contents w-100">
            <div className="middle-content">
              <div className="caption mt-sm-3 mt-lg-5 pt-sm-1 pt-lg-3">
                <Fade>
                  <p className="text-white text-uppercase mb-3 mb-lg-4">
                    {this.props.welcomeText}
                  </p>
                </Fade>
                <Fade>
                  <h1 className="text-white mb-3 mb-lg-4">
                    {this.props.titleName}
                  </h1>
                </Fade>
              </div>
            </div>
          </div>
          <div className="move-down">
            <Zoom bottom>
              <img src={scrollDown} alt="Move to another section" />
            </Zoom>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(TitleSection);
