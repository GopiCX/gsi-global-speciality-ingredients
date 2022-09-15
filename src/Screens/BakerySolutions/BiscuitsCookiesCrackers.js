import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
//import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/bakery-solutions/biscuits-cookies-crackers/1.jpg';
import slide2 from '../../assets/images/bakery-solutions/biscuits-cookies-crackers/2.jpg';
import slide3 from '../../assets/images/bakery-solutions/biscuits-cookies-crackers/3.jpg';


const bakeStableGallery = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
};

class BiscuitsCookiesCrackers extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="solutions-grids card mb-3">
                    <Row align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <Slider {...bakeStableGallery} className="border-radius-left">
                                <div className="item">
                                    <img src={slide1} alt="Biscuits Cookies Crackers" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Biscuits Cookies Crackers" />
                                </div>
                                <div className="item">
                                    <img src={slide3} alt="Biscuits Cookies Crackers" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Biscuits Cookies Crackers</h3>
                            <Row gutter={[20, 20]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLOMUL DS6040</li>
                                            <li>GLOMUL SSL 208</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Cookies</li>
                                            <li>Soft cookies</li>
                                            <li>Crackers</li>
                                            <li>Wafer</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Improved distribution of fat in the dough</li>
                                            <li>Reduced dough viscosity</li>
                                            <li>Improved dough handling</li>
                                            <li>Increased spread</li>
                                            <li>Fat replacement</li>
                                            <li>Improves product homogeneity</li>
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
export default withRouter(BiscuitsCookiesCrackers) 