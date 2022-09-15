import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
//import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/oil-fat-solutions/puff-pastry-margarine/1.jpg';
import slide2 from '../../assets/images/oil-fat-solutions/puff-pastry-margarine/2.jpg';
import slide3 from '../../assets/images/oil-fat-solutions/puff-pastry-margarine/3.jpg';


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

class PuffPastryMargarine extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="solutions-grids card mb-3">
                    <Row align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <Slider {...bakeStableGallery} className="border-radius-left">
                                <div className="item">
                                    <img src={slide1} alt="PuffPastry Margarine" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="PuffPastry Margarine" />
                                </div>
                                <div className="item">
                                    <img src={slide3} alt="PuffPastry Margarine" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">PuffPastry Margarine</h3>
                            <Row gutter={[20, 20]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLOMUL 4420 B</li>
                                            <li>GLOMUL 4420 M</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Sweet puffs</li>
                                            <li>Puffs</li>
                                            <li>Paratha</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Emulsion stabilization</li>
                                            <li>Effecting crystallization</li>
                                            <li>Promotes through crystallization for improved handling properties</li>
                                            <li>Leading to good plasticity</li>
                                            <li>Layer separation &amp; excellent expansion</li>
                                            <li>Good mouth-feel and cripiness</li>
                                            <li>Sugar protector</li>
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
export default withRouter(PuffPastryMargarine)