import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
//import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/dairy-dairy-analogue/imitation-cream/1.jpg';
import slide2 from '../../assets/images/dairy-dairy-analogue/imitation-cream/2.jpg';
import slide3 from '../../assets/images/dairy-dairy-analogue/imitation-cream/3.jpg';

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

class ImitationCream extends React.Component {
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
                                    <img src={slide1} alt="Imitation Cream" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Imitation Cream" />
                                </div>
                                <div className="item">
                                    <img src={slide3} alt="Imitation Cream" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Imitation Cream</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLOWIP</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Whipping cream</li>
                                            <li>Icings/ cream fillings</li>
                                            <li>Topping powder</li>
                                            <li>Liquid topping</li>
                                            <li>Mousses</li>
                                            <li>Desserts</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>α-tending emulsifiers strengthen the foam skeleton due to increase foam agglomeration</li>
                                            <li>Long shelf life</li>
                                            <li>Improved the foam stiffiness</li>
                                            <li>Prevents drainage in the</li>
                                            <li>whipping cream</li>
                                            <li>Good piping definition but different body &amp; mouth feel can be produced</li>
                                            <li>Good storage stability</li>
                                            <li>Better cost-in use calculation</li>
                                            <li>Better foam stability</li>
                                            <li>Improved overrun</li>
                                            <li>Improved freeze-thaw stability</li>
                                            <li>Improved whippability</li>
                                            <li>Improved mouthfeel</li>
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
export default withRouter(ImitationCream)