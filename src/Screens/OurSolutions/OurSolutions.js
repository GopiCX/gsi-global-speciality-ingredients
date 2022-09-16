import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
import './OurSolutions.scss'
import SolutionList from './SolutionList'

import confectionerySolutions from "../../assets/images/our-solutions/confectionery-solutions.jpg";
import bakerySolution from "../../assets/images/our-solutions/bakery-solutions.jpg";
import shelfLife from "../../assets/images/our-solutions/shelf-life-frying-solutions.jpg";
import oilFat from "../../assets/images/our-solutions/oil-fat-solutions.jpg";
import antiClouding from "../../assets/images/our-solutions/anti-clouding-clouding-agents.jpg";
import beverageSolutions from "../../assets/images/our-solutions/beverage-solutions.jpg";
import chocolateSolutions from "../../assets/images/our-solutions/chocolate-solutions.jpg";
import dairyAnalogue from "../../assets/images/our-solutions/dairy-dairy-analogue.jpg";
import colourSolutions from "../../assets/images/our-solutions/flavour-colour-solutions.jpg";
import nutritionSolutions from "../../assets/images/our-solutions/nutrition-solutions.jpg";
import savourySolutions from "../../assets/images/our-solutions/savoury-solutions.jpg";
import Adsorbent from "../../assets/images/our-solutions/adsorbent.jpg";

class OurSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection className="solutions" welcomeText="Welcome to Global peciality Ingredients" titleName="Driven By Voyage of Discovery" />

                <section className="gsi-solutions py-5  p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Our Cutting Edge Solutions</h2>
                                <p className="text-left mt-3">Our extraordinary ingredients are product of technical expertise, meticulous research and innovation and listening to and working with our customers.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <Row gutter={[20, 20]} align="center">
                            <SolutionList solutionTitle="Confectionery Solutions" solutionPageLink="/confectionery-solutions" solutionImg={confectionerySolutions} />
                            <SolutionList solutionTitle="Bakery Solutions" solutionPageLink="/bakery-solutions" solutionImg={bakerySolution} />
                            <SolutionList solutionTitle="Shelf Life & Frying Solutions" solutionPageLink="/shelf-life-frying-solutions" solutionImg={shelfLife} />
                            <SolutionList solutionTitle="Oil & Fat Solutions" solutionPageLink="/oil-fat-solutions" solutionImg={oilFat} />
                            <SolutionList solutionTitle="Anti-Clouding & Clouding Agents" solutionPageLink="/anti-clouding-clouding-agents" solutionImg={antiClouding} />
                            <SolutionList solutionTitle="Beverage Solutions" solutionPageLink="/beverage-solutions" solutionImg={beverageSolutions} />
                            <SolutionList solutionTitle="Chocolate Solutions" solutionPageLink="/chocolate-solutions" solutionImg={chocolateSolutions} />
                            <SolutionList solutionTitle="Dairy & Dairy Analogue" solutionPageLink="/dairy-dairy-analogue" solutionImg={dairyAnalogue} />
                            <SolutionList solutionTitle="Flavour & Colour Solutions" solutionPageLink="/flavour-colour-solutions" solutionImg={colourSolutions} />
                            <SolutionList solutionTitle="Nutrition Solutions" solutionPageLink="/nutrition-solutions" solutionImg={nutritionSolutions} />
                            <SolutionList solutionTitle="Savoury Solutions" solutionPageLink="/savoury-solutions" solutionImg={savourySolutions} />
                            <SolutionList solutionTitle="Adsorbent" solutionPageLink="/about-us" solutionImg={Adsorbent} />
                         </Row>
                    </div>
                </section>

            </React.Fragment >
        )
    }
}
export default withRouter(OurSolutions)