import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import FryingOilFiltrationFryingOilRecoverySolutions from './FryingOilFiltrationFryingOilRecoverySolutions';
import FeedstockOilBiodieselPurification from './FeedstockOilBiodieselPurification';
import OleoChemicalPurification from './OleoChemicalPurification';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Fade';

class Adsorbent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection className="adsorbent" welcomeText="WELCOME TO GLOBAL SPECIALITY INGREDIENTS" titleName="Adsorbent" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">In response to increasing trends and advancements in Frying Oil Filtration, Recovery, and Purification Solutions, Global Specialty Ingredients and The Dallas Group of America have collaborated to offer a comprehensive selection of adsorbents that are tailored into the most effective results. </p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <FryingOilFiltrationFryingOilRecoverySolutions />
                                <FeedstockOilBiodieselPurification />
                                <OleoChemicalPurification />
                            </Fade>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(Adsorbent)