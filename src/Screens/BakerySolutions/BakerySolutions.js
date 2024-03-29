import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
import '../ConfectionerySolutions/ConfectionerySolutions.scss';
import BreadRollPastry from './BreadRollPastry';
import Cake from './Cake';
import CakePremix from './CakePremix';
import BiscuitsCookiesCrackers from './BiscuitsCookiesCrackers';
import CerealsSnacks from './CerealsSnacks';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Fade';
import { bgImages } from '../../Util/data';
import LubricationReleasingAgents from './LubricationReleasingAgents';
import { Helmet } from "react-helmet";

class BakerySolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                   <Helmet>
          <meta charSet="utf-8" />
          <title>GSI - Bakery Solutions</title> 
          <meta name="title" content=""/> 
          <meta name="description" content="GSI offers extensive product portfolio of ingredients, flavours and integrated systems for your Bakery Solutions"/> 
          <meta name="keywords" content="Bakery Solutions,bread,roll pastry,cake,premix,Biscuits Cookies Crackers,cereal snacks,lubrications,release agents"/> 
          <meta name="og:title" content="GSI offers extensive product portfolio of ingredients, flavours and integrated systems for your Bakery Solutions"/>      
          <meta name="og:description" content="GSI is there to share our expertise and support across the entire bakery industry from market intelligence to product development."/> 
              </Helmet>

                <TitleSection sliderImages={bgImages.bs} className="bakery-solutions" welcomeText="" titleName="Bakery Solutions" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">Delight your customers using the most extensive product portfolio of ingredients, flavours and integrated systems for the bakery industry together with our customized innovation and expertise. GSI is ready to share our expertise and support across the entire bakery industry from market intelligence to product development.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <BreadRollPastry />
                                <Cake />
                                <CakePremix />
                                <BiscuitsCookiesCrackers />
                                <CerealsSnacks />
                                <LubricationReleasingAgents />
                            </Fade>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(BakerySolutions)