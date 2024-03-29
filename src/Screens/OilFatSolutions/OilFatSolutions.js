
import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
import MargarineSpread from './MargarineSpread';
import IndustrialCakeCreamMargarine from './IndustrialCakeCreamMargarine';
import PuffPastryMargarine from './PuffPastryMargarine';
import VegetableCream from './VegetableCream';
import Ghee from './Ghee';
import LiquidShortening from './LiquidShortening';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Fade';
import { bgImages } from '../../Util/data';
import SpecialtyFat from './SpecialtyFat';
import { Helmet } from "react-helmet";

class OilFatSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                       <Helmet>
          <meta charSet="utf-8" />
          <title>GSI - Oils & Fats Solutions </title> 
          <meta name="title" content=""/> 
          <meta name="description" content="GSI offers broad range of functional emulsifier blends for use in margarines, shortenings, ghees and other lipid products."/> 
          <meta name="keywords" content="Global Specialty Ingredients,Oils & Fats Solutions,margarines,puff pastry,vegetable cream,shortenings,fat,ghee"/> 
          <meta name="og:title" content="GSI - Oils & Fats Solutions "/>      
          <meta name="og:description" content="GSI offers broad range of functional emulsifier blends for use in margarines, shortenings, ghees and other lipid products."/> 
              </Helmet>

                <TitleSection sliderImages={bgImages.oilFat} className="oil-fat-solutions" welcomeText="" titleName="Oils & Fats Solutions" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">GSI offers a broad range of functional emulsifier blends for use in margarines, shortenings, ghees and other lipid products. Our expertise team will help you to optimize your emulsifers and fat compositions, and your production processing as well in order for you to achieve the best results.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <MargarineSpread />
                                <IndustrialCakeCreamMargarine />
                                <PuffPastryMargarine />
                                <VegetableCream />
                                <Ghee />
                                <LiquidShortening />
                                <SpecialtyFat />
                            </Fade>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(OilFatSolutions)