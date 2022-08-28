import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Row, Col, BackTop } from 'antd';
import './Footer.scss'
import mainlogo from "../assets/images/gsi-logo.svg";
import functionalIngredients from "../assets/images/Functional-Ingredients-Tailored-to-your-needs.svg"

export default class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="footer py-5">
                    <div className="container mx-auto">
                        <Row gutter={[12, 22]}>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 14 }} lg={{ span: 14 }}>
                                <div className="d-flex">
                                    <img src={mainlogo} className="pr-4 mr-4 border-right" alt="GSI - Global Specialty Ingredients | Your Innovation Our Solution" />
                                    <img src={functionalIngredients} alt="Functional Ingredients Tailored to your needs" />
                                </div>
                                <div className="social-media mt-5">
                                    <h3 className="text-red text-uppercase">Follow us</h3>
                                    <ul className="d-flex p-0 m-0">
                                        <li><a href=""><i class="fa fa-facebook" aria-hidden="true" /></a></li>
                                        <li><a href=""><i class="fa fa-instagram" aria-hidden="true" /></a></li>
                                        <li><a href=""><i class="fa fa-twitter" aria-hidden="true" /></a></li>
                                        <li><a href=""><i class="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 5 }} lg={{ span: 5 }}>
                                <h3 className="text-red">Get In Touch</h3>
                                <div className="contact-item">
                                    <div className="icon">
                                        <i class="fa fa-whatsapp" aria-hidden="true" />
                                    </div>
                                    <div className="details">
                                        <span>Whatsapp</span>
                                        <p>+6018 955 1105</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="icon">
                                        <i class="fa fa-envelope-o" aria-hidden="true" />
                                    </div>
                                    <div className="details">
                                        <span>Email</span>
                                        <p>marketing@gsiworldwide.com</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 5 }} lg={{ span: 5 }}>
                                <div className="contact-item mt-4">
                                    <div className="icon">
                                        <i class="fa fa-phone" aria-hidden="true" />
                                    </div>
                                    <div className="details">
                                        <span>Phone</span>
                                        <p>+6018 3123 7171</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="icon">
                                        <i class="fa fa-clock-o" aria-hidden="true" />
                                    </div>
                                    <div className="details">
                                        <span>Hours</span>
                                        <p>Mon-Fri 9:00AM - 6:00 PM (GMT+8) </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="bottom-footer py-3">
                    <div className="container mx-auto">
                        <Row gutter={[12, 22]}>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                <ul className="p-0 m-0">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/team">Our Solution</Link>
                                    </li>
                                    <li>
                                        <Link to="/movies">Responsibility</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Careers</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Contact</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                <div className="text-right text-white" >
                                    <Link to="#" className="border-right text-white pr-2 mr-2">Terms and Conditions</Link> <span>© {(new Date().getFullYear())} Copyright GSI. All Right reserved.</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <BackTop>
                    <div className="back-to-top">UP</div>
                </BackTop>
            </React.Fragment>
        );
    }
}