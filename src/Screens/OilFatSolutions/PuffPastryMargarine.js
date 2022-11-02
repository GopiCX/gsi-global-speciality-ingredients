import React from 'react';
import { withRouter } from 'react-router'; 
import { Row, Col } from 'antd'; 
import SliderBox from "../../Components/SliderBox/SliderBox";
import { solutionImg } from '../../Util/solutionData';
class PuffPastryMargarine extends React.Component {
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
                        <SliderBox solutionImages={solutionImg.PuffPastry} />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">PuffPastry Margarine</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLOMUL 4420 B</li>
                                            <li>GLOMUL 4420 M</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Sweet puffs</li>
                                            <li>Puffs</li>
                                            <li>Paratha</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
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
                        <button className={this.state.showMoreinfo ? "btn ant-btn-primary visible" : "btn ant-btn-primary not-visible"} onClick={() => this.setState({ showMoreinfo: !this.state.showMoreinfo })}>
                        {this.state.showMoreinfo ? "Show Less" : "Show More"}
                    </button>
                    </Row>
                </div>
            </React.Fragment >
        )
    }
}
export default withRouter(PuffPastryMargarine)