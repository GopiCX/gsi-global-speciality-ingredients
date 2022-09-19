import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './TitleSection.scss';
import scrollDown from '../../assets/images/icons/mouse-icon.svg';

class TitleSection extends Component {
    render() {
        return (
            <React.Fragment>
                <section className={`text-center top-banner p-mob ${this.props.className}`} >
                    <div className="container mx-auto ">
                        <div className="center-contents w-100">
                            <div className="middle-content">
                                <div className="caption mt-sm-3 mt-lg-5 pt-sm-1 pt-lg-3">
                                    <Fade top>
                                        <p className="text-white text-uppercase mb-3 mb-lg-4">{this.props.welcomeText}</p>
                                    </Fade>
                                    <Zoom top>
                                        <h1 className="text-white mb-3 mb-lg-4">{this.props.titleName}</h1>
                                    </Zoom>
                                </div>
                            </div>
                        </div>

                        <div className="move-down">
                            <Zoom>
                                <img src={scrollDown} alt="Move to another section" />
                            </Zoom>
                        </div>

                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default withRouter(TitleSection);
