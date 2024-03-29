import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import bathijaRajeshQrCode from '../../assets/images/key-account-manager/Mr-Rajesh-Bathija.png'
import './KeyAccountmanager.scss'
import uae from '../../assets/images/countries/uae.png';
import egypt from '../../assets/images/countries/egypt.png';
import saudiArabia from '../../assets/images/countries/saudi-arabia.png';
import canada from '../../assets/images/countries/canada.png';
import usa from '../../assets/images/countries/usa.png';

class AccountManagerBathija extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="key-account-manager globe-bg card p-3 p-sm-4 p-md-4 p-lg-4 mb-3">
                    <Row gutter={[20, 20]} align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <img src={bathijaRajeshQrCode} alt="bathija Rajesh  QR code to scan" className="w-100 qr-contact" />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} >
                            <h3 className="text-blue">Mr. Rajesh Bathija</h3>
                            <h6>Key Account Manager</h6>

                            <Row gutter={[20, 20]} className="mb-4">
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 9 }} className="border-right mr-2 pr-2"  >
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa fa-whatsapp" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Whatsapp</span>
                                            <p>
                                                <a href="https://wa.me/918105566315" target="_blank" rel="noopener noreferrer">+91 81055 66315</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Email</span>
                                            <p>
                                                <a href="mailto:inquiry@gsi-worldwide.com">inquiry@gsi-worldwide.com</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa fa-clock-o" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Hours</span>
                                            <p>(GMT+5:30): Mon-Fri 9:00AM - 6:00PM</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }} >
                                    <h4 className="text-blue">Supported Region</h4>
                                    <div className="supported-region">
                                        <ul>
                                            <li><img src={uae} alt="UAE" />UAE</li>
                                            <li><img src={egypt} alt="Eygpt" />Eygpt</li>
                                            <li><img src={saudiArabia} alt="Saudi Arabia" />Saudi Arabia</li>
                                            <li><img src={canada} alt="Canada" />Canada</li>
                                        </ul>
                                        <ul>
                                            <li><img src={usa} alt="U.S.A" />U.S.A</li>
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
export default withRouter(AccountManagerBathija)