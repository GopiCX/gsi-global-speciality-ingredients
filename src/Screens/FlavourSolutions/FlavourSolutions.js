import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
import Flavours from './Flavours';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Bounce';
import { bgImages } from '../../Util/data';
import { Helmet } from "react-helmet";
 
class FlavourSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                 <Helmet>
          <meta charSet="utf-8" />
          <title>GSI - Flavour Solutions</title> 
          <meta name="title" content=""/> 
          <meta name="description" content="At Global Specialty Ingredients we offer offers colours and flavours which suitable to all kinds of your food products."/> 
          <meta name="keywords" content="Global Specialty Ingredients ,Flavours"/> 
          <meta name="og:title" content="GSI - Flavour Solutions"/>      
          <meta name="og:description" content="At Global Specialty Ingredients we offer offers colours and flavours which suitable to all kinds of your food products."/> 
          </Helmet>
                <TitleSection sliderImages={bgImages.Flavour} className="flavour-colour-solutions" welcomeText="" titleName="Flavour Solutions" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">Experience the dramatic growth of food aesthethics, GSI offers colours and flavours which suitable to all kinds of your food products.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <Flavours />
                            </Fade>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(FlavourSolutions)