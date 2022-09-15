import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/confectionary-solutions/coating/1.jpg';
import slide2 from '../../assets/images/confectionary-solutions/coating/2.jpg';
import slide3 from '../../assets/images/confectionary-solutions/coating/3.jpg';
import slide4 from '../../assets/images/confectionary-solutions/coating/4.jpg';
import slide5 from '../../assets/images/confectionary-solutions/coating/5.jpg';

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

class Coating extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="solutions-grids card mb-3">
                    <Row align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <Slider {...bakeStableGallery} className="border-radius-left">
                                <div className="item">
                                    <img src={slide1} alt="Coating" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Coating" />
                                </div>
                                <div className="item">
                                    <img src={slide3} alt="Coating" />
                                </div>
                                <div className="item">
                                    <img src={slide4} alt="Coating" />
                                </div>
                                <div className="item">
                                    <img src={slide5} alt="Coating" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Coating</h3>
                            <Row gutter={[20, 20]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLORICH 7155 E(Emulsifier)</li>
                                            <li>GLORICH 7155 OS(Oil System)</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Ice cream dip</li>
                                            <li>Ice cream cone coating</li>
                                            <li>Doughnut coating</li>
                                            <li>Frozen desserts &amp; desserts</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Prevents oil separation</li>
                                            <li>Improved viscosity of final product</li>
                                            <li>Achieved thin layer</li>
                                            <li>Short crystallization time</li>
                                            <li>Plasticity coating texture, without cracking</li>
                                            <li>Avoid fat bloom</li>
                                            <li>Form relatively hard, brittle layers upon cooling</li>
                                            <li>Avoid water migration</li>
                                            <li>Melts in the mouth temperature at 35℃</li>
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
export default withRouter(Coating)