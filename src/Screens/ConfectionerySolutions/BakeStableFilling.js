import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/confectionary-solutions/bake-stable-filling/1.jpg';
import slide2 from '../../assets/images/confectionary-solutions/bake-stable-filling/2.jpg';
import slide3 from '../../assets/images/confectionary-solutions/bake-stable-filling/3.jpg';
import slide4 from '../../assets/images/confectionary-solutions/bake-stable-filling/4.jpg';

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

class BakeStableFilling extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="solutions-grids card mb-3">
                    <Row align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <Slider {...bakeStableGallery} className="border-radius-left">
                                <div className="item">
                                    <img src={slide1} alt="Bake Stable Filling" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Bake Stable Filling" />
                                </div>
                                <div className="item">
                                    <img src={slide3} alt="Bake Stable Filling" />
                                </div>
                                <div className="item">
                                    <img src={slide4} alt="Bake Stable Filling" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Bake Stable Filling</h3>
                            <Row gutter={[20, 20]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLORICH 6363(Emulsifier)</li>
                                            <li>GLORICH BSO 23 (Oil System)</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Biscuits  cookies filling</li>
                                            <li>Pies puffs filling</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Bake stable at elevated temperature</li>
                                            <li>Slow post hardening effect</li>
                                            <li>Improved glossiness</li>
                                            <li>Smooth texture</li>
                                            <li>Improved viscosity of final product</li>
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
export default withRouter(BakeStableFilling)