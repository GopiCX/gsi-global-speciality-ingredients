import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import SportsBalancedNutrition from './SportsBalancedNutrition';
import FatsolubleVitaminsCarrier from './FatsolubleVitaminsCarrier';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Fade';
class NutritionSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection className="nutrition-solutions" welcomeText="Welcome to Global peciality Ingredients" titleName="Sports and Balanced Nutrition" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">Fullfill the ever-changing demands of the nutritional market together with us. GSI offers the high-quality, value-added nutritional ingredients and customised comprehensive solutions will help you create nutritional food applications include fish oil replacements, sport, health, clinical and infant nutritions.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <SportsBalancedNutrition />
                                <FatsolubleVitaminsCarrier />
                            </Fade>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(NutritionSolutions)