import React from 'react';
import { withRouter } from 'react-router'; 
import { Row, Col } from 'antd'; 
import SliderBox from "../../Components/SliderBox/SliderBox";
import { solutionImg } from '../../Util/solutionData';
class SpecialtyFat extends React.Component {
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
                        <SliderBox solutionImages={solutionImg.SpecialtyFat} />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Specialty Fat (CBS/CBR/CBE)</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLORICH 5052/5022</li>
                                            <li>GLOMUL PGPR 50</li>
                                            <li>GLOMUL PGPR850</li>
                                            <li>GLOCHOC</li>
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
                                            <li>Chocolate compounds & bar</li>
                                            <li>Enrobed confectionary & bakery pieces</li>
                                            <li>"Easy" & "difficult" chocolate moulds</li>
                                            <li>Spinning confectionary products</li>
                                            <li>panning confectionary products</li>
                                            <li>Chocolate filling</li>
                                            <li>Liquid Chocolate</li>
                                            <li>Chocolate paste, tablet, coating</li>
                                            <li>Soft chocolate compound /solid bar for cold climate</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Prevent fat blooming on surface of chocolate compound/bar</li>
                                            <li>Improved glossiness & flowing properties of chocolate</li>
                                            <li>Smooth texture</li>
                                            <li>Optimization cocoa butter content & coating thickness</li>
                                            <li>Simplifying processing and handling</li>
                                            <li>Reduction of plastic viscosity</li>
                                            <li>Ideal chocolate flow properties needed to fill the mould without creating air bubbles</li>
                                            <li>Possible to reduce fat content</li>
                                            <li>Fast-melting form with good snap</li>
                                            <li>Melts in the mouth temperature at 35°C</li>
                                            <li>Excellent eating characteristics for ultimate indulgence</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <button className={this.state.showMoreinfo ? "btn ant-btn-primary visible" : "btn ant-btn-primary not-visible"} onClick={() => this.setState({ showMoreinfo: !this.state.showMoreinfo })}>
                        {this.state.showMoreinfo ? "Show Less" : "Show More"}
                    </button>
                    </Row>
                </div>
            </React.Fragment >
        )
    }
}
export default withRouter(SpecialtyFat)