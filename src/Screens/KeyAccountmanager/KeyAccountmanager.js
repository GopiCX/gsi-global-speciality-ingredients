import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
import './KeyAccountmanager.scss';
import Vijay from './Vijay';
import Kamen from './Kamen';
import Saravanan from './Saravanan';
import Bathija from './Bathija';
import RajeshJesuraj from './RajeshJesuraj';
import RobertBasker from './RobertBasker';
import Darry from './Darry';
import { bgImages } from '../../Util/data';
import { Helmet } from "react-helmet";

class KeyAccountmanager extends React.Component {
    render() {
        return (
            <React.Fragment>
             <Helmet>
          <meta charSet="utf-8" />
          <title>GSI Meet Your Key Account Manager</title> 
          <meta name="title" content=""/> 
          <meta name="description" content="GSI key-account-manager are there to help you with our product with extensive expertise and experience"/> 
          <meta name="keywords" content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"/> 
          <meta name="og:title" content="GSI key-account-manager are there to help you with our product with extensive expertise and experience"/>      
          <meta name="og:description" content="GSI Key account manager are there to assist you will our various products and service as per your requirements"/> 
              </Helmet>
                <TitleSection sliderImages={bgImages.kam} className="key-account-manager" welcomeText="" titleName="Meet Your Key Account Manager" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please meet your key account manager</h2>
                                <p className="text-left mt-3">Here at GSI Malaysia, we are excited to help you at every level of product development thanks to our extensive expertise and experience. Take a look at our awesome team and find your key account manager today!</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Vijay />
                            <Bathija />
                            <Darry />
                            <Saravanan />            
                                                 
                            <RajeshJesuraj />
                            <RobertBasker />
                             {/* <Kamen /> */}
                        </div>
                    </div>
                </section>

            </React.Fragment >
        )
    }
}
export default withRouter(KeyAccountmanager)