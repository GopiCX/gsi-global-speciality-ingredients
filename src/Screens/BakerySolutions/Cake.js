import React from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
import SliderBox from "../../Components/SliderBox/SliderBox";
import { solutionImg } from '../../Util/solutionData';
class Cake extends React.Component {
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
                            <SliderBox solutionImages={solutionImg.Cake} />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Cake</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLORISE 5410</li>
                                            <li>GLOMUL MGD 95</li>
                                            <li>GLOMUL SSL 208</li>
                                            <li>GLOMUL PS 60</li>
                                            <li>GLOMUL 2209</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Primary Applications</h5>
                                        <ul>
                                            <li>Sponge cakes</li>
                                            <li>Pound cakes</li>
                                            <li>Chiffon cakes</li>
                                            <li>Cup cakes</li>
                                            <li>Muffins</li>
                                            <li>Layer cakes</li>
                                            <li>Moist cakes</li>
                                            <li>High fat cakes</li>
                                            <li>Swiss rolls</li>
                                            <li>Eggless cakes</li>
                                            <li>Bakery cake margarine's &amp; shortening</li>
                                            <li>Low fat cakes</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Improved softness and tenderness</li>
                                            <li>Improved batter aeration</li>
                                            <li>Improves air incorporation</li>
                                            <li>Optimal fat-air interface emulsifier</li>
                                            <li>Uniform gas cell size structure</li>
                                            <li>Increased volume</li>
                                            <li>Improved crumb structure</li>
                                            <li>Extend shelf life and reducing staling effect</li>
                                            <li>More fat tolerance</li>
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
export default withRouter(Cake)