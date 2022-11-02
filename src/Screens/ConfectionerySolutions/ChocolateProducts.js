import React from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/confectionary-solutions/chocolate-products/1.jpg';
import slide2 from '../../assets/images/confectionary-solutions/chocolate-products/2.jpg';
import slide3 from '../../assets/images/confectionary-solutions/chocolate-products/3.jpg';



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

class ChocolateProducts extends React.Component {
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
                                    <img src={slide1} alt="Sugar Confectionery" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Sugar Confectionery" />
                                </div>
                                <div className="item">
                                    <img src={slide3} alt="Sugar Confectionery" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Chocolate Products</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLORICH 5052</li>
                                            <li>GLOMUL PGPR 50</li>
                                            <li>Soy Lecithin</li>
                                            <li>GLOCOAT</li>
                                            <li>GLOROBE</li>
                                            <li>GLOFILL</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Primary Applications</h5>
                                        <ul>
                                            <li><span className="JsGRdQ">Chocolate compounds &amp; bar</span></li>
                                            <li><span className="JsGRdQ">Enrobed confectionery &amp; bakery pieces</span></li>
                                            <li><span className="JsGRdQ">“Easy” &amp; “difficult” chocolate moulds</span></li>
                                            <li><span className="JsGRdQ">Spinning confectionery products</span></li>
                                            <li><span className="JsGRdQ">Panning confectionery products</span></li>
                                            <li><span className="JsGRdQ">Chocolate filling</span></li>
                                            <li><span className="JsGRdQ">Liquid chocolate</span></li>
                                            <li><span className="JsGRdQ">Chocolate paste, tablet, coating</span></li>
                                            <li><span className="JsGRdQ">Soft chocolate compound /solid bar for cold climate</span></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li><span className="JsGRdQ">Prevents fat blooming on surface of chocolate compound/bar</span></li>
                                            <li><span className="JsGRdQ">Improve glossiness &amp; flowing properties of chocolate</span></li>
                                            <li><span className="JsGRdQ">Smooth texture</span></li>
                                            <li><span className="JsGRdQ">Optimization cocoa butter content &amp; coating thickness</span></li>
                                            <li><span className="JsGRdQ">Simplifying processing and handling</span></li>
                                            <li><span className="JsGRdQ">Reduction of plastic viscosity</span></li>
                                            <li><span className="JsGRdQ">Ideal chocolate flow properties needed to fill the mould without creating air bubbles</span></li>
                                            <li><span className="JsGRdQ">Possible to reduce fat content</span></li><li><span className="JsGRdQ">Fast-melting form with good snap</span></li>
                                            <li><span className="JsGRdQ">Melts in the mouth temperature at 35℃</span></li>
                                            <li><span className="JsGRdQ">Excellent eating characteristics for ultimate indulgence</span></li>
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
export default withRouter(ChocolateProducts)