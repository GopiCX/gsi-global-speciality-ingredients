import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import SliderBox from "../../Components/SliderBox/SliderBox";
import { solutionImg } from '../../Util/solutionData';

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
                        <SliderBox solutionImages={solutionImg.ImitationCream} />
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
                                        <h5 className="text-red">Primary Applications</h5>
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
                                            <li>Improved the foam stiffiness, overrun, freeze-thaw stability, whippability & mouthfeel</li>
                                            <li>Prevents drainage in the</li>
                                            <li>whipping cream</li>
                                            <li>Good piping definition but different body &amp; mouth feel can be produced</li>
                                            <li>Good storage stability</li>
                                            <li>Better cost-in use calculation</li>
                                            <li>Better foam stability</li>
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