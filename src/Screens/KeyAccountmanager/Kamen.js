import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import KamenQrCode from '../../assets/images/key-account-manager/kamen.webp'
import './KeyAccountmanager.scss'
import malaysia from '../../assets/images/countries/malaysia.png';
import china from '../../assets/images/countries/china.png';
import phillipines from '../../assets/images/countries/phillipines.png';
import australia from '../../assets/images/countries/australia.png';
import newZealand from '../../assets/images/countries/newzealand.png';
import portugal from '../../assets/images/countries/portugal.png';
import spain from '../../assets/images/countries/spain.png';
import italy from '../../assets/images/countries/italy.png';

class AccountManagerKamen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="key-account-manager globe-bg card p-3 p-sm-4 p-md-4 p-lg-4 mb-3">
                    <Row gutter={[20, 20]} align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <img src={KamenQrCode} alt="Kamen QR code to scan" className="w-100 qr-contact" />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 224 }} md={{ span: 18 }} lg={{ span: 18 }} >
                            <h3 className="text-blue">Mr. Kamen Tham</h3>
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
                                                <a href="https://wa.me/60193327324" target="_blank" rel="noopener noreferrer">+6019 332 7324</a>
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
                                            <p>(GMT+8): Mon-Fri 9:00AM - 6:00PM</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }} >
                                    <h4 className="text-blue">Supported Region</h4>
                                    <div className="supported-region">
                                        <ul>
                                            <li><img src={malaysia} alt="North Malaysia" />Central Malaysia</li>
                                            <li><img src={china} alt="China" />China</li>
                                            <li><img src={phillipines} alt="Philippines" />Philippines</li>
                                            <li><img src={australia} alt="Australia" />Australia</li>
                                        </ul>
                                        <ul>
                                            <li><img src={newZealand} alt="New Zealand" />New Zealand</li>
                                            <li><img src={portugal} alt="Portugal" />Portugal</li>
                                            <li><img src={spain} alt="Spain" />Spain</li>
                                            <li><img src={italy} alt="Italy" />Italy</li>
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
export default withRouter(AccountManagerKamen)