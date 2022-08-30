import React from "react";
import { withRouter } from "react-router";
import { Row, Col, Popover } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Award1 from '../../../assets/images/award/awards-1.png';
import Award2 from '../../../assets/images/award/awards-2.png';
import './AwardsAchievements.scss'

const awardslidersettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
};
class AwardsAchievements extends React.Component {
    render() {
        return (
            <React.Fragment>

                <section className="awards-achievements ">
                    <h2 className="border-left-3 text-black text-md-white text-lg-white  border-danger pl-3 mb-3">Awards & Achievements</h2>

                    <Slider {...awardslidersettings}>
                        <div className="list">
                            <Row align="center" className="pb-3 ">
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} className="text-center">
                                    <img src={Award1} alt="Awards" />
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} className="bg-blue py-5 px-lg-5 px-2 text-white  px-lg-3 center-contents">
                                    <div className="awards px-lg-3 middle-content">
                                        <span className="d-block">2019</span>
                                        <p>Best Food Ingredients Supplier by Frost and Sullivan</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="list">
                            <Row align="center" className="pb-3 ">
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} className="text-center">
                                    <img src={Award2} alt="Awards" />
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} className="bg-blue py-5 px-lg-5 px-2 text-white  px-lg-3 center-contents">
                                    <div className="awards px-lg-3 middle-content">
                                        <span className="d-block">2018</span>
                                        <p>STAR OUTSTANDING BUSINESS AWARDS (SOBA)</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Slider>
                </section>
            </React.Fragment >
        );
    }
}
export default withRouter(AwardsAchievements);
