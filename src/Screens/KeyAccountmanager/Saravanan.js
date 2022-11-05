import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col,  } from 'antd';
import SaravananQrCode from '../../assets/images/key-account-manager/saravanan.webp'
import './KeyAccountmanager.scss'
import malaysia from '../../assets/images/countries/malaysia.png';
import singapore from '../../assets/images/countries/singapore.png';
import india from '../../assets/images/countries/india.png';
import pakistan from '../../assets/images/countries/pakistan.png';
import bangladesh from '../../assets/images/countries/bangladesh.png';
import sriLanka from '../../assets/images/countries/sri-lanka.png';
import russia from '../../assets/images/countries/russia.png';

class AccountManagerSaravanan extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="key-account-manager globe-bg card p-3 p-sm-4 p-md-4 p-lg-4 mb-3">
                    <Row gutter={[20, 20]} align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <img src={SaravananQrCode} alt="Saravanan QR code to scan" className="w-100 qr-contact" />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} >
                            <h3 className="text-blue">Mr. Saravanan</h3>
                            <h6>Senior Key Account Manager</h6>

                            <Row gutter={[20, 20]} className="mb-4">
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 9 }} className="border-right mr-2 pr-2"  >
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa fa-whatsapp" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Whatsapp</span>
                                            <p>
                                                <a href="https://wa.me/60122301583" target="_blank" rel="noopener noreferrer">+6012 230 1583</a>
                                            </p>
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
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa fa-clock-o" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Hours</span>
                                            <p>(GMT+8): Mon-Fri 9:00AM - 6:00PM</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }} >
                                    <h4 className="text-blue">Supported Region</h4>
                                    <div className="supported-region">
                                        <ul>
                                            <li><img src={malaysia} alt="North Malaysia" />South Malaysia</li>
                                            <li><img src={singapore} alt="Singapore" />Singapore</li>
                                            <li><img src={india} alt="India" />India</li>
                                            <li><img src={pakistan} alt="pakistan" />Pakistan</li>
                                        </ul>
                                        <ul>
                                            <li><img src={bangladesh} alt="Bangladesh" />Bangladesh</li>
                                            <li><img src={sriLanka} alt="Sri Lanka" />Sri Lanka</li>
                                            <li><img src={russia} alt="Russia" />Russia</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </React.Fragment >
        )
    }
}
export default withRouter(AccountManagerSaravanan)