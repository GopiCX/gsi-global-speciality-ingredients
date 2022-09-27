import React from "react";
import { withRouter } from "react-router";
import { Row, Col } from "antd";
import Slider from "react-slick";
import "./ExpertPartners.scss";
import ethical from "../../../assets/images/career/ethical.png"
import open from "../../../assets/images/career/open.png"
import proactive from "../../../assets/images/career/proactive.png"
import comprehensiveSupport from "../../../assets/images/career/comprehensive-support.png"
import technicalExpertise from "../../../assets/images/career/technical-expertise.png"
import innovationInsight from "../../../assets/images/career/innovation-insight.png"
import Fade from 'react-reveal/Fade';

const expertSlidersettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 580,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
};
class ExpertPartners extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="expert-partners bg-blue-gradient py-5  p-mob">
                    <div className="container mx-auto py-2 py-lg-3">
                        <Row gutter={[30, 20]} align="center" className="text-white pb-3 pb-lg-5 ">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                                <Fade>
                                    <h2 className="border-left-3 text-white  border-danger pl-3 mb-3">We are committed expert partners</h2>
                                    <p className="mt-3">We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right.</p>
                                </Fade>
                            </Col>
                        </Row>
                        <Row gutter={[30, 20]} align="center">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                                <Fade>
                                    <Slider {...expertSlidersettings}>
                                        <div className="item">
                                            <div className="details">
                                                <div className="image">
                                                    <img src={proactive} alt="proactive" />
                                                </div>
                                                <div className="desc">
                                                    <h3 className="text-blue">Proactive</h3>
                                                    <p>We're not just a transactional partner; we're a proactive partner who works alongside to assist you reach your objectives whilst creating value to your business</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Slider Item ends--> */}
                                        <div className="item">
                                            <div className="details">
                                                <div className="image">
                                                    <img src={ethical} alt="ethical" />
                                                </div>
                                                <div className="desc">
                                                    <h3 className="text-blue">Ethical</h3>
                                                    <p>It's critical that we conduct ourselves ethically in all parts of our organisation. Our Code of Ethics serves as a guide for us and helps us stay focused on our goals.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Slider Item ends--> */}
                                        <div className="item">
                                            <div className="details">
                                                <div className="image">
                                                    <img src={open} alt="open" />
                                                </div>
                                                <div className="desc">
                                                    <h3 className="text-blue">Open</h3>
                                                    <p>We encourage feedback and want you to feel comfortable approaching us. We want to know if anything isn't working properly so we can fix it.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Slider Item ends--> */}
                                        <div className="item">
                                            <div className="details">
                                                <div className="image">
                                                    <img src={comprehensiveSupport} alt="Comprehensive Support" />
                                                </div>
                                                <div className="desc">
                                                    <h3 className="text-blue">Comprehensive Support</h3>
                                                    <p>We can help you at every level of product development thanks to our extensive expertise and experience. Understanding you and knowing what you want is crucial to our long-term relationships being successful.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Slider Item ends--> */}
                                        <div className="item">
                                            <div className="details">
                                                <div className="image">
                                                    <img src={technicalExpertise} alt="Technical Expertise" />
                                                </div>
                                                <div className="desc">
                                                    <h3 className="text-blue">Technical Expertise</h3>
                                                    <p>We have been working with functional ingredients products for over 15 years. Our application and technical service laboratories assists us in developing solutions for a wide range of customers.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Slider Item ends--> */}
                                        <div className="item">
                                            <div className="details">
                                                <div className="image">
                                                    <img src={innovationInsight} alt="Innovation And Insight" />
                                                </div>
                                                <div className="desc">
                                                    <h3 className="text-blue">Innovation And Insight</h3>
                                                    <p>Our innovative team in new product development professionals apply their extensive ability, varied experience, and unique perspective to bring outstanding ideas to life.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Slider Item ends--> */}
                                    </Slider>
                                </Fade>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default withRouter(ExpertPartners);
