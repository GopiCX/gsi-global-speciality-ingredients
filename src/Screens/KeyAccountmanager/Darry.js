import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col} from 'antd';
import DarryQrCode from '../../assets/images/key-account-manager/Darry.webp'
import './KeyAccountmanager.scss'
import malaysia from '../../assets/images/countries/malaysia.png';
import australia from '../../assets/images/countries/australia.png';
import Newzealand from '../../assets/images/countries/newzealand.png';
import Indonesia from '../../assets/images/countries/Indonesia.png';
import PapuaNewGuinea from '../../assets/images/countries/PapuaNewGuinea.png';
import Philippines from '../../assets/images/countries/phillipines.png';

class AccountManagerDarry extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="key-account-manager globe-bg card p-3 p-sm-4 p-md-4 p-lg-4 mb-3">
                    <Row gutter={[20, 20]} align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <img src={DarryQrCode} alt="Darry QR code to scan" className="w-100 qr-contact" />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} >
                            <h3 className="text-blue">Mr. Darry</h3>
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
                                                <a href="https://wa.me/60189551105" target="_blank" rel="noopener noreferrer">+6018 955 1105</a>
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
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}  >
                                    <h4 className="text-blue">Supported Region</h4>
                                    <div className="supported-region">
                                        <ul>
                                            <li><img src={malaysia} alt="Central Malaysia"/>Central Malaysia</li>
                                            <li><img src={Indonesia} alt="Indonesia" />Indonesia</li>
                                            <li><img src={Philippines} alt="Philippines" />Philippines</li>
                                                                                                               
                                        </ul>
                                        <ul>
                                             <li><img src={Newzealand} alt="New Zealand"/>New Zealand</li>
                                            <li><img src={australia} alt="Australia"/>Australia</li>
                                            <li><img src={PapuaNewGuinea} alt="PapuaNewGuinea"/>Papua New Guinea</li>
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
export default withRouter(AccountManagerDarry)
