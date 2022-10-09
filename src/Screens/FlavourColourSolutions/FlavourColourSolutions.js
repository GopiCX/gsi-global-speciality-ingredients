import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import Carrier from './Carrier';
import Colours from './Colours';
import Flavours from './Flavours';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Bounce';
class FlavourColourSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection className="flavour-colour-solutions" welcomeText="WELCOME TO GLOBAL SPECIALTY INGREDIENTS" titleName="Flavour Colour Solutions" />

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
                                <Carrier />
                                <Colours />
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
export default withRouter(FlavourColourSolutions)