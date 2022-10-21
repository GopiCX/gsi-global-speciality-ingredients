import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
import './ConfectionerySolutions.scss';
import BakeStableFilling from './BakeStableFilling';
import ShelfStableFilling from './ShelfStableFilling';
import Coating from './Coating';
import Spread from './Spread';
import BakeStableTopFilling from './BakeStableTopFilling';
import GumBase from './GumBase';
import Candy from './Candy';
import SugarConfectionery from './SugarConfectionery';
import ChocolateProducts from './ChocolateProducts';
import GlazingAgents from './GlazingAgents';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Fade';
import { bgImages } from '../../Util/data';
class ConfectionerySolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection sliderImages={bgImages.cs} className="confectionary-solutions" welcomeText="WELCOME TO GLOBAL SPECIALTY INGREDIENTS" titleName="Confectionery Solutions" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">GSI is well-equipped to give excellent products that allow you to produce interesting extensions to existing and innovative products, from chocolate confectioneries to sugar confectioneries. Coatings, baked stable fillings, shelf stable fillings, and spreads are just a few examples.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <BakeStableFilling />
                                <ShelfStableFilling />
                                <Coating />
                                <Spread />
                                <BakeStableTopFilling />
                                <GumBase />
                                <Candy />
                                <SugarConfectionery />
                                <ChocolateProducts />
                                <GlazingAgents />
                            </Fade>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(ConfectionerySolutions)