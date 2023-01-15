import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import PastaNoodles from './PastaNoodles';
import SaucesGravies from './SaucesGravies';
import MeatProducts from './MeatProducts';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Fade';
import { bgImages } from '../../Util/data';
import { Helmet } from "react-helmet"; 

class SavourySolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <Helmet>
          <meta charSet="utf-8" />
          <title>GSI - Savoury Solutions</title> 
          <meta name="title" content=""/> 
<meta name="description" content=" Global Specialty Ingredients Savoury Solutions offers easy, cost-effective and reliable products are flavourful, safe and efficient."/> 
          <meta name="keywords" content="Global Specialty Ingredients ,Adsorbents,frying oil filtration,feedstock oil,biodiesel purification,frying oil recovery solutions"/> 
          <meta name="og:title" content="GSI - Savoury Solutions - Savoury Solutions"/>      
          <meta name="og:description" content="Global Specialty Ingredients Savoury Solutions offers easy, cost-effective and reliable products are flavourful, safe and efficient."/> 
              </Helmet>

                <TitleSection sliderImages={bgImages.savoury} className="savoury-solutions" welcomeText="" titleName="Savoury Solutions" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">Deliver a mouth-watering eating experience for your customers! GSI offers you cost-effective, value added and great tasting savoury solutions that will leave your customers craving for more.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <PastaNoodles />
                                <SaucesGravies />
                                <MeatProducts />
                            </Fade>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(SavourySolutions)