import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import SportsBalancedNutrition from './SportsBalancedNutrition';
import FatsolubleVitaminsCarrier from './FatsolubleVitaminsCarrier';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Fade';
import { bgImages } from '../../Util/data';
import { Helmet } from "react-helmet"; 

class NutritionSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
          <meta charSet="utf-8" />
          <title>GSI - Nutrition Solutions</title> 
          <meta name="title" content=""/> 
<meta name="description" content="Global Specialty Ingredients Nutrition Solutions offers high-quality, value-added nutritional ingredients and customized comprehensive solutions."/> 
          <meta name="keywords" content="Global Specialty Ingredients ,Adsorbents,frying oil filtration,feedstock oil,bio-diesel purification,frying oil recovery solutions"/> 
          <meta name="og:title" content="GSI - Nutrition Solutions"/>      
          <meta name="og:description" content="Global Specialty Ingredients Nutrition Solutions offers high-quality, value-added nutritional ingredients and customized comprehensive solutions."/> 
              </Helmet>

                <TitleSection sliderImages={bgImages.nutrition} className="nutrition-solutions" welcomeText="" titleName="Nutrition Solutions" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">Fullfil the ever-changing demands of the nutritional market together with us. GSI offers the high-quality, value-added nutritional ingredients and customized comprehensive solutions will help you create nutritional food applications include fish oil replacements, sport, health, clinical and infant nutrition's.</p>
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