import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
//import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/bakery-solutions/bread-roll-pastry/1.jpg';
import slide2 from '../../assets/images/bakery-solutions/bread-roll-pastry/2.jpg';


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

class BreadRollPastry extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="solutions-grids card mb-3">
                    <Row align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <Slider {...bakeStableGallery} className="border-radius-left">
                                <div className="item">
                                    <img src={slide1} alt="Bread & Roll Pastry" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Bread & Roll Pastry" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Bread & Roll Pastry</h3>
                            <Row gutter={[20, 20]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLOMUL DS 8020</li>
                                            <li>GLOMUL MGD 95</li>
                                            <li>GLOMUL SSL 208</li>
                                            <li>GLOMUL SSL 302</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>White pan breads</li>
                                            <li>Sweet buns</li>
                                            <li>Ham burger buns</li>
                                            <li>Doughnuts</li>
                                            <li>Frozen dough pastries</li>
                                            <li>Steam products</li>
                                            <li>Flat breads</li>
                                            <li>Danish &amp; sweet doughs</li>
                                            <li>Powdered bread improver products</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Dough conditioner &amp; strengthening</li>
                                            <li>Shock tolerance</li>
                                            <li>Volume and crumb texture control</li>
                                            <li>Fine crumb structure</li>
                                            <li>Water dispersible</li>
                                            <li>Shortening replacement</li>
                                            <li>Increase dough viscosity</li>
                                            <li>Better gas retention</li>
                                            <li>Greater bread volume</li>
                                            <li>Produce crisp bread crust</li>
                                            <li>Improved softness</li>
                                            <li>Shelf-life extension and anti-staling</li>
                                            <li>Long fresh keeping</li>
                                            <li>Increase the dough’s fermentation tolerance</li>
                                            <li>Reduction of water loss during baking</li>
                                            <li>Improvement in chewing &amp; taste properties</li>
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
export default withRouter(BreadRollPastry)