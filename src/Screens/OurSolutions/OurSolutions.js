import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
import './OurSolutions.scss'
import SolutionList from './SolutionList'

import confectionerySolutions from "../../assets/images/our-solutions/confectionery-solutions.png";
import bakerySolution from "../../assets/images/our-solutions/bakery-solutions.png";
import shelfLife from "../../assets/images/02-shelf-life-frying-solutions.png";
import oilFat from "../../assets/images/03-oil-Fat-solutions.png";
import antiClouding from "../../assets/images/03-oil-Fat-solutions.png";
import beverageSolutions from "../../assets/images/03-oil-Fat-solutions.png";
import chocolateSolutions from "../../assets/images/03-oil-Fat-solutions.png";
import dairyAnalogue from "../../assets/images/03-oil-Fat-solutions.png";
import colourSolutions from "../../assets/images/03-oil-Fat-solutions.png";
import nutritionSolutions from "../../assets/images/03-oil-Fat-solutions.png";
import savourySolutions from "../../assets/images/03-oil-Fat-solutions.png";
import Adsorbent from "../../assets/images/03-oil-Fat-solutions.png";

class OurSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection className="solutions" welcomeText="Welcome to Global peciality Ingredients" titleName="Driven By Voyage of Discovery" />

                <section className="gsi-solutions py-5">
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
                            <SolutionList solutionTitle="Confectionery Solutions" solutionPageLink="/about-us" solutionImg={confectionerySolutions} />
                            <SolutionList solutionTitle="Bakery Solutions" solutionPageLink="/about-us" solutionImg={bakerySolution} />
                            <SolutionList solutionTitle="Shelf Life & Frying Solutions" solutionPageLink="/about-us" solutionImg={shelfLife} />
                            <SolutionList solutionTitle="Oil & Fat Solutions" solutionPageLink="/about-us" solutionImg={oilFat} />
                            <SolutionList solutionTitle="Anti-Clouding & Clouding Agents" solutionPageLink="/about-us" solutionImg={antiClouding} />
                            <SolutionList solutionTitle="Beverage Solutions" solutionPageLink="/about-us" solutionImg={beverageSolutions} />
                            <SolutionList solutionTitle="Chocolate Solutions" solutionPageLink="/about-us" solutionImg={chocolateSolutions} />
                            <SolutionList solutionTitle="Dairy & Dairy Analogue" solutionPageLink="/about-us" solutionImg={dairyAnalogue} />
                            <SolutionList solutionTitle="Flavour & Colour Solutions" solutionPageLink="/about-us" solutionImg={colourSolutions} />
                            <SolutionList solutionTitle="Nutrition Solutions" solutionPageLink="/about-us" solutionImg={nutritionSolutions} />
                            <SolutionList solutionTitle="Savoury Solutions" solutionPageLink="/about-us" solutionImg={savourySolutions} />
                            <SolutionList solutionTitle="Adsorbent" solutionPageLink="/about-us" solutionImg={Adsorbent} />
                         </Row>
                    </div>
                </section>

            </React.Fragment >
        )
    }
}
export default withRouter(OurSolutions)