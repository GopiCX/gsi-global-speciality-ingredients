import React from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
import '../ConfectionerySolutions/ConfectionerySolutions.scss'
import slide1 from '../../assets/images/adsorbent/oleo-chemical-purification/1.jpg';
import slide2 from '../../assets/images/adsorbent/oleo-chemical-purification/2.jpg';


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

class FeedstockOilBiodieselPurification extends React.Component {
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
                                    <img src={slide1} alt="Oleo Chemical Purification" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Oleo Chemical Purification" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Oleo Chemical Purification</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>MAGNESORB® 1500R</li>
                                            <li>MAGNESORB® 2000R</li>
                                        </ul>
                                        <p>MAGNESORB® is a registered trademark of The DallasGroup of America, Inc. for a magnesium silicate baseproducts.</p>                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Fats and Oils Refining</li>
                                            <li>Oleochemical Purification</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <p>MAGNESORB® Purification Reduce …</p>
                                        <ul>
                                            <li>Reduction in Color Bodies</li>
                                            <li>Reduction in Pro oxidants</li>
                                            <li>Reduction in Soaps</li>
                                            <li>Reduction in Heavy Metals/ Catalists</li>
                                            <li>Reduction in Phosphorous &amp; Sulfur</li>
                                            <li>Reduction in Free Fatty Acids (FFA)</li>
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
export default withRouter(FeedstockOilBiodieselPurification)