import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import rajeshJesurajQrCode from '../../assets/images/key-account-manager/rajesh-jesuraj.webp'
import './KeyAccountmanager.scss'

class AccountManagerRajeshJesuraj extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="key-account-manager globe-bg card p-3 p-sm-4 p-md-4 p-lg-4 mb-3">
                    <Row gutter={[20, 20]} align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <img src={rajeshJesurajQrCode} alt="Rajesh Jesuraj QR code to scan" className="w-100" />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} >
                            <h3 className="text-blue">Mr. Rajesh Jesuraj</h3>
                            <Row gutter={[20, 20]} className="mb-4">
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 9 }} className="border-right mr-2 pr-2"  >
                                    <h6>GM - Sales & Marketing</h6>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i class="fa fa-whatsapp" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Whatsapp</span>
                                            <p>+6012 636 3807</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i class="fa fa-envelope-o" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Email</span>
                                            <p>rajeshjesuraj@gsi-worldwide.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i class="fa fa-clock-o" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Hours</span>
                                            <p>(GMT+8): Mon-Fri 9:00AM - 6:00PM</p>
                                        </div>
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
export default withRouter(AccountManagerRajeshJesuraj)