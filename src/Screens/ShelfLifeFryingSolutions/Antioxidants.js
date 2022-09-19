import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
import slide1 from '../../assets/images/shelf-life-frying-solutions/antioxidants/1.jpg';
import slide2 from '../../assets/images/shelf-life-frying-solutions/antioxidants/2.jpg';



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

class Antioxidants extends React.Component {
    constructor() {
        super();
        this.state = {
            showMoreinfo: false
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="solutions-grids card mb-3">
                    <Row align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <Slider {...bakeStableGallery} className="border-radius-left">
                                <div className="item">
                                    <img src={slide1} alt="Antioxidants" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Antioxidants" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Antioxidants</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLOFRY B200</li>
                                            <li>GLOFRY B5050</li>
                                            <li>GLOFRY BT200</li>
                                            <li>GLOFRY C30</li>
                                            <li>GLOFRY T150NC</li>
                                            <li>GLOFRY T200</li>
                                            <li>GLOFRY T202</li>
                                            <li>GLOFRY T206</li>
                                            <li>GLOFRY T1080</li>
                                            <li>GLOFRY T2010</li>
                                            <li>GLOFRY T5050</li>
                                            <li>GLOFRY T5050 DGM</li>
                                            <li>GLOASPA 10</li>
                                            <li>GLOASPA 10C</li>
                                            <li>GLOALPHA 82</li>
                                            <li>GLOPHEROL AP 5050</li>
                                            <li>GLOPHEROL APC 5050</li>
                                            <li>GLOLECI 40 SY</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Cooking oil &amp; food products</li>
                                            <li>Vegetable oils &amp; fats</li>
                                            <li>Emulsifiers</li>
                                            <li>Confectioneries</li>
                                            <li>Dairy &amp; dairy analogue products</li>
                                            <li>Animals fats</li>
                                            <li>Feed products</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Increases frying life of the fried oil</li>
                                            <li>Increases shelf life of fried products</li>
                                            <li>Absorbs less oil in fried products</li>
                                            <li>Slows down acceleration of FFA</li>
                                            <li>Slows down acceleration of peroxide value</li>
                                            <li>Slows down the rate of rancidity</li>
                                            <li>High rancimat value which provide better stability on the shelf life of fried products</li>
                                            <li>Prolongs shelf life Increases oxidative stability index</li>
                                            <li>Prevents further free radical reaction</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <button className={this.state.showMoreinfo ? "btn ant-btn-primary visible" : "btn ant-btn-primary not-visible"} onClick={() => this.setState({ showMoreinfo: !this.state.showMoreinfo })}>
                        {this.state.showMoreinfo ? "Show Less" : "Show More"}
                    </button>
                </div>
            </React.Fragment >
        )
    }
}
export default withRouter(Antioxidants)