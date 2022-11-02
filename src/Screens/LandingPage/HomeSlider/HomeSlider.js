import React from "react";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import BgVideo from "react-background-video-player";
import posterImg from "../../../assets/images/main-slider/main-slider.webp";
import posterVideo from "../../../assets/video/gsi-hero-page.mp4";
import scrollDown from "../../../assets/images/icons/mouse-icon.svg";
import "./HomeSlider.scss";
import Slider from "react-slick";

const headlineData = [
  "Bringing Revolutionary Ideas & Solutions of Tomorrow",
  "Providing Cutting Edge Solutions",
  "Making Products Sustainable In Global Market",
  "Differentiating & Reengineering Value Creation",
  "Driven By The Voyage Of Discovery",
  "Cycle Of Improvement",
];

// const HomeSliderSettings = {
//   arrows: false,
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   fade: true,
//   cssEase: "ease-in-out",
//   touchThreshold: 100,
// };
class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: undefined,
      isMuted: undefined,
      progress: 0,
      currentTime: 0,
      duration: 0,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      value: 0,
      headline: headlineData[0],
    };
  }

  componentDidMount() {
    this.setState({
      isPlaying: !this.player.isPaused,
      isMuted: this.player.isMuted,
    });
    window.addEventListener("resize", this.handleResize);
    const interval = setInterval(() => {
      if (this.state.value === headlineData.length - 1) {
        this.setState({
          value: 0,
          headline: headlineData[0],
        });
      } else {
        this.setState({
          value: this.state.value + 1,
          headline: headlineData[this.state.value + 1],
        });
      }
    }, 7000);
    return () => clearInterval(interval);
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <!--Main Slider section starts--> */}
        <div className="gsi-slider">
          <div className="slider-content ">
            <BgVideo
              ref={(p) => (this.player = p)}
              containerWidth={this.state.windowWidth}
              containerHeight={this.state.windowHeight}
              src={posterVideo}
              poster={posterImg}
              onPlay={this.handleOnPlay}
              onPause={this.handleOnPause}
              onMute={this.handleOnMute}
              onUnmute={this.handleOnUnmute}
              onTimeUpdate={this.handleTimeUpdate}
              autoPlay={true}
              volume={0}
            />
            <div className=" item">
              <div className="center-contents w-100 p-mob">
                <div className=" middle-content ">
                  <div className="container mx-auto slider-caption">
                    <Fade>
                      <h1 className="text-white text-center mb-3">
                        WELCOME TO GLOBAL SPECIALTY INGREDIENTS
                      </h1>
                    </Fade>
                    <Fade>
                      <p className="text-center text-white home-headline">{this.state.headline}</p>
                    </Fade>
                    {/* <Slider {...HomeSliderSettings}>
                      {headlineData.map((data, i) => (
                        <div className="list" key={i}>
                          <img src={image} className="zoom-in-effect" alt="" />
                        </div>
                      ))}
                    </Slider> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="move-down text-center">
              <Zoom bottom>
                <img src={scrollDown} alt="Move to another section" />
              </Zoom>
            </div>
          </div>
        </div>
        {/* <!--Main Slider section ends--> */}
      </React.Fragment>
    );
  }
}
export default withRouter(HomeSlider);
