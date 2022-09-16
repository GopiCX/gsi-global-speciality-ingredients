import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
import VijayQrCode from '../../assets/images/key-account-manager/vijay.webp'
import './KeyAccountmanager.scss'
import malaysia from '../../assets/images/countries/malaysia.png';
import thailand from '../../assets/images/countries/thailand.png';
import vietnam from '../../assets/images/countries/vietnam.png';
import france from '../../assets/images/countries/france.png';
import germany from '../../assets/images/countries/germany.png';
import japan from '../../assets/images/countries/japan.png';
import korea from '../../assets/images/countries/korea.png';
import myanmar from '../../assets/images/countries/myanmar.png';

class AccountManagerVijay extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="key-account-manager globe-bg card p-3 p-sm-4 p-md-4 p-lg-4 mb-3">
                    <Row gutter={[20, 20]} align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <img src={VijayQrCode} alt="Vijay QR code to scan" className="w-100" />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} >
                            <h3 className="text-blue">Mr. Vijay</h3>
                            <h6>Key Account Manager</h6>

                            <Row gutter={[20, 20]} className="mb-4">
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 9 }} className="border-right mr-2 pr-2"  >
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i class="fa fa-whatsapp" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Whatsapp</span>
                                            <p>+6014 3612 525</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i class="fa fa-envelope-o" aria-hidden="true" />
                                        </div>
                                        <div className="details">
                                            <span>Email</span>
                                            <p>marketing@gsi-worldwide.com</p>
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
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }} >
                                    <h4 className="text-blue">Supported Region</h4>
                                    <div className="supported-region">
                                        <ul>
                                            <li><img src={malaysia} alt="North Malaysia" />North Malaysia</li>
                                            <li><img src={france} alt="France" />France</li>
                                            <li><img src={germany} alt="Germany" />Germany</li>
                                            <li><img src={japan} alt="Japan" />Japan</li>
                                        </ul>
                                        <ul>
                                            <li><img src={thailand} alt="Thailand" />Thailand</li>
                                            <li><img src={vietnam} alt="Vietnam" />Vietnam</li>
                                            <li><img src={korea} alt="Korea" />Korea</li>
                                            <li><img src={myanmar} alt="Myanmar" />Myanmar</li>
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
export default withRouter(AccountManagerVijay)