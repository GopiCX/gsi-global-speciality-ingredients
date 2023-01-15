import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import Coffee from './Coffee';
import InstantBeverage from './InstantBeverage';
import ChocolateBeverage from './ChocolateBeverage';
import SoftDrinkJuices from './SoftDrinkJuices';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Bounce from 'react-reveal/Bounce';
import { bgImages } from '../../Util/data';
import Beverage from './Beverage';
import { Helmet } from "react-helmet";

class BeverageSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
          <meta charSet="utf-8" />
          <title>GSI - Beverage Solutions</title> 
          <meta name="title" content=""/> 
          <meta name="description" content="Global Specialty Ingredients provide you with the right solutions for your hot- and cold-beverage projects, whether you are looking to create the perfect mocktail or beverage concept."/> 
          <meta name="keywords" content="Global Specialty Ingredients,Beverage Solutions,cofee,chocolate,soft drink,juices"/> 
          <meta name="og:title" content="GSI - Beverage Solutions"/>      
          <meta name="og:description" content="Global Specialty Ingredients provide you with the right solutions for your hot- and cold-beverage projects, whether you are looking to create the perfect mocktail or beverage concept."/> 
              </Helmet>
                <TitleSection sliderImages={bgImages.beverage} className="beverage-solutions" welcomeText="" titleName="Beverage Solutions" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">GSI will help you develop exotic hot- and cold-beverage concepts with our innovative products. You no longer have to worry about the flavour and functionality challenges posed when creating great drinks.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Bounce>
                                <Coffee />
                                <InstantBeverage />
                                <Beverage />
                                <ChocolateBeverage />
                                <SoftDrinkJuices />
                            </Bounce>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(BeverageSolutions)