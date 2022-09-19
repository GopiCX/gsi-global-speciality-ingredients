import React from "react";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'; 
import { Link } from "react-router-dom";
import TestComponent from 'react-background-video-player';
import posterImg from '../../../assets/images/main-slider/main-slider.webp';
import posterVideo from '../../../assets/video/gsi-hero-page.mp4';
import scrollDown from '../../../assets/images/icons/mouse-icon.svg';
import "./HomeSlider.scss";

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
    }
  }

  componentDidMount() {
    this.setState({
      isPlaying: !this.player.isPaused,
      isMuted: this.player.isMuted,
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  };

  render() {
    return (
      <React.Fragment>
        {/* <!--Main Slider section starts--> */}
        <div className="gsi-slider">
          <div className="slider-content ">
            <TestComponent
              ref={p => this.player = p}
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
                    <Zoom top>
                      <h1 className="text-white text-center mb-3">WELCOME TO GLOBAL SPECIALTY INGREDIENTS</h1>
                    </Zoom>
                    <Fade top>
                      <p className="text-center text-white">Bringing Revolutionary Ideas<br /> and Solutions of Tomorrow</p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <div className="move-down text-center">
              <img src={scrollDown} alt="Move to another section" />
            </div>
          </div>
        </div>
        {/* <!--Main Slider section ends--> */}
      </React.Fragment>
    );
  }
}
export default withRouter(HomeSlider);
