import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import SliderBox from "../../Components/SliderBox/SliderBox";
import { solutionImg } from '../../Util/solutionData';
class IndustrialCakeCreamMargarine extends React.Component {

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
                            <SliderBox solutionImages={solutionImg.IndustrialCake} />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Industrial Cake & Cream Margarine</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLORISE 5410</li>
                                            <li>CREAMY 15</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Primary Applications</h5>
                                        <ul>
                                            <li>Bakery margarines</li>
                                            <li>Bakery shortenings</li>
                                            <li>Bread shortenings</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Air incorporation and retention within the cake batter</li>
                                            <li>Improved aeration, water absorption properties, stabilization & mouthfeels</li>
                                            <li>Increase creaming volume</li>
                                            <li>Reduced whipping time</li>
                                            <li>Control crystallization</li>
                                            <li>Viscosity control</li>
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
export default withRouter(IndustrialCakeCreamMargarine)