import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
//import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/flavour-colour-solutions/flavours/1.jpg';

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

class Flavours extends React.Component {
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
                                    <img src={slide1} alt="Flavours" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Flavours</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>AIC SODA FLAVOUR S065</li>
                                            <li>ALMOND FLAVOUR S060</li>
                                            <li>ANISE FLAVOUR S053</li>
                                            <li>APPLE FLAVOUR S040</li>
                                            <li>BADAM ELACHI FLAVOUR S045</li>
                                            <li>BADAM ELACHI POWDER FLAVOUR S004</li>
                                            <li>BANANA FLAVOUR S086</li>
                                            <li>BANANA POWDER FLAVOUR S005</li>
                                            <li>BLACK CURRANT FLAVOURS102</li>
                                            <li>BUTTER FLAVOUR S043</li>
                                            <li>BUTTERONE POWDER FLAVOUR S019</li>
                                            <li>BUTTERSCOTCH FLAVOUR S049</li>
                                            <li>BUTTERSCOTCH POWDER FLAVOUR S009</li>
                                            <li>CARDAMOM FLAVOUR S041</li>
                                            <li>CARDAMOM POWDER FLAVOUR S007</li>
                                            <li>CARDAMOM POWDER FLAVOUR S090</li>
                                            <li>CASHEWNUT FLAVOUR S061</li>
                                            <li>CHEESE FLAVOUR S047</li>
                                            <li>CHEESEONE POWDER FLAVOUR S020</li>
                                            <li>CHOCOLATE FLAVOUR S038</li>
                                            <li>CHOCOLATE POWDER FLAVOUR S008</li>
                                            <li>CLOUD FLAVOUR EMULSION S063</li>
                                            <li>COCONUT FLAVOUR S031</li>
                                            <li>COFFEE FLAVOUR S050</li>
                                            <li>CRANBERRY FLAVOUR S026</li>
                                            <li>CREAM FLAVOUR S066</li>
                                            <li>FRUIT FLAVOUR S023</li>
                                            <li>GARLIC FLAVOUR S054</li>
                                            <li>GHEE FLAVOUR S051</li>
                                            <li>GHEE POWDER FLAVOUR S010</li>
                                            <li>GLOCHESE 1010</li>
                                            <li>GRAPE FLAVOUR S081</li>
                                            <li>GUAVA FLAVOUR S029</li>
                                            <li>JEERA FLAVOUR S025</li>
                                            <li>KHEER FLAVOUR S034</li>
                                            <li>KULFI FLAVOUR S030</li>
                                            <li>LEMON FLAVOUR S067</li>
                                            <li>LICHI FLAVOUR S024</li>
                                            <li>LYCHEE FLAVOUR S039</li>
                                            <li>MALT FLAVOUR S062</li>
                                            <li>MANGO FLAVOUR S022</li>
                                            <li>MANGO POWDER FLAVOUR S012</li>
                                            <li>MANGOSTEEN FLAVOUR S046</li>
                                            <li>MASALA POWDER FLAVOUR S013</li>
                                            <li>MAWA FLAVOUR S083</li>
                                            <li>MILK FLAVOUR S033</li>
                                            <li>MILKONE POWDER FLAVOUR S100</li>
                                            <li>MINT FLAVOUR S071</li>
                                            <li>MOLASSES FLAVOUR S059</li>
                                            <li>ONION FLAVOUR S052</li>
                                            <li>ORANGE FLAVOUR S035</li>
                                            <li>ORANGE POWDER FLAVOUR S018</li>
                                            <li>PEANUT FLAVOUR S070</li>
                                            <li>PINEAPPLE FLAVOUR S028</li>
                                            <li>PLUM FLAVOUR S042</li>
                                            <li>RASPBERRY FLAVOUR S055</li>
                                            <li>ROSE FLAVOUR S069</li>
                                            <li>SAVOURY ONE POWDER FLAVOUR S098</li>
                                            <li>STRAWBERRY FLAVOUR S027</li>
                                            <li>STRAWBERRY POWDER FLAVOUR S015</li>
                                            <li>TAMARIND FLAVOUR S076</li>
                                            <li>VANILLA FLAVOUR S021</li>
                                            <li>VANILLA POWDER FLAVOUR S017</li>
                                            <li>VANILLA POWDER FLAVOUR S088</li>
                                            <li>WATERMELON FLAVOUR S036</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Core Applications</h5>
                                        <ul>
                                            <li>Bakery products</li>
                                            <li>Snack products</li>
                                            <li>Confectionery products</li>
                                            <li>Savory products</li>
                                            <li>Dairy &amp; dairy analogue products</li>
                                            <li>Beverage prodcuts</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Flavoring agents</li>
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
export default withRouter(Flavours)