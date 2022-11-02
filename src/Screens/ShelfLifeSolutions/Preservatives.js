import React from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
import SliderBox from "../../Components/SliderBox/SliderBox";
import { solutionImg } from '../../Util/solutionData';


class Preservatives extends React.Component {
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
                            <SliderBox solutionImages={solutionImg.preservatives} />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Preservatives</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLOBALANCE 93</li>
                                            <li>GLOBALANCE 170</li>
                                            <li>GLOPHEROL AP 5050</li>
                                            <li>GLOPHEROL APC 5050</li>
                                            <li>POTASSIUM SORBATE</li>
                                            <li>SODIUM BENZOATE</li>
                                            <li>BENZOIC ACID</li>
                                            <li>PROPIONIC ACID</li>
                                            <li>CITRIC ACID</li>
                                            <li>CALCIUM PROPIONATE</li>
                                            <li>BHA</li>
                                            <li>BHT</li>
                                            <li>TOCOPHEROL</li>
                                            <li>SODIUM</li>
                                            <li>SODIUM METABISULPHITE</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Primary Applications</h5>
                                        <ul>
                                            <li>Beverages</li>
                                            <li>Sauces</li>
                                            <li>Baked goods</li>
                                            <li>Confectioneries</li>
                                            <li>Dairy products</li>
                                            <li>Margarine &amp; spreads</li>
                                            <li>Dried Meats</li>
                                            <li>Rehydrated fruits</li>
                                            <li>Syrups</li>
                                            <li>Wine</li>
                                            <li>Pasta &amp; Noodles</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Prolongs shelf life</li>
                                            <li>Effective against yeast &amp; mould growth</li>
                                            <li>Neutral taste &amp; odour</li>
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
export default withRouter(Preservatives)