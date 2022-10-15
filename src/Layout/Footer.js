import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Row, Col, BackTop } from 'antd';
import Fade from 'react-reveal/Fade';
import './Footer.scss'
import mainlogo from "../assets/images/gsi-logo.svg";
import functionalIngredients from "../assets/images/Functional-Ingredients-Tailored-to-your-needs.svg"
import moveTop from "../assets/images/icons/up-arrow.svg"

export default class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>                 
                <section className="footer py-5  p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[10, 10]}>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 13 }}>
                                <div className="footer-logo mb-3 mb-lg-5">
                                    <Fade>
                                        <img src={mainlogo} className="pr-4 mr-4 border-right" alt="GSI - Global Specialty Ingredients | Your Innovation Our Solution" />
                                        <img src={functionalIngredients} alt="Functional Ingredients Tailored to your needs" />
                                    </Fade>
                                </div>
                                <div className="social-media">
                                    <Fade>
                                        <h3 className="text-red text-uppercase">Follow us</h3>
                                        <ul className="d-flex p-0 m-0">
                                            <li><a href="https://www.facebook.com/globalspecialtyingredients/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                            <li><a href="https://www.instagram.com/globalspecialtyingredients/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                            <li><a href="https://twitter.com/specialty_m" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                            <li><a href="https://www.linkedin.com/company/global-specialty-ingredients/jobs/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                                        </ul>
                                    </Fade>
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                                <Fade>
                                    <h3 className="text-red">Get In Touch</h3>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa fa-whatsapp" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Whatsapp</span>
                                            <p><a href="https://wa.me/60189551105" target="_blank" rel="noopener noreferrer">+6018 955 1105</a></p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Email</span>
                                            <p><a href="mailto:inquiry@gsi-worldwide.com">inquiry@gsi-worldwide.com</a></p>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 5 }}>
                                <Fade>
                                    <div className="contact-item mt-sm-2 mt-md-3 mt-lg-4">
                                        <div className="icon">
                                            <i className="fa fa-phone" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Phone</span>
                                            <p><a href="tel:+6018 3123 7171">+6018 3123 7171</a></p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa fa-clock-o" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Hours</span>
                                            <p>Mon-Fri 9:00AM - 6:00 PM (GMT+8) </p>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className="bottom-footer py-3  p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[12, 22]}>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 14 }}>
                                <Fade>
                                    <ul className="p-0 m-0">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/our-solution">Our Solution</Link>
                                        </li>
                                        <li>
                                            <Link to="/responsibility">Responsibility</Link>
                                        </li>
                                        <li>
                                            <Link to="/events">Events</Link>
                                        </li>
                                        <li>
                                            <Link to="/career">Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">Contact</Link>
                                        </li>
                                    </ul>
                                </Fade>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }}>
                                <Fade>
                                    <div className="text-right text-white" >
                                        <Link to="/terms-and-conditions" className="border-right text-white pr-2 mr-2">Terms and Conditions</Link> <span>© {(new Date().getFullYear())} Copyright GSI. All Right Reserved.</span>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                    </div>
                </section>
               
                <BackTop>
                    <div className="back-to-top">
                        <img src={moveTop} alt="move to top" />
                        <span className="d-block">UP</span>
                    </div>
                </BackTop>
            </React.Fragment>
        );
    }
}