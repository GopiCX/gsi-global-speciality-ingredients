import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import OilsFatsCrystalEnhancer from './OilsFatsCrystalEnhancer';
import OilsFatsAntiCrystallization from './OilsFatsAntiCrystallization';
import Beverages from './Beverages';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Fade from 'react-reveal/Fade';
class AntiCloudingCloudingAgents extends React.Component {
    constructor() {
        super();
        this.state = {
            showMoreinfo: false
        };
    }
    render() {
        return (
            <React.Fragment>
                <TitleSection className="anti-clouding-clouding-agents" welcomeText="WELCOME TO GLOBAL SPECIALTY INGREDIENTS" titleName="Anti Clouding & Clouding Agents" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">GSI offers anti-clouding and clouding additives to serve your products designed.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <OilsFatsCrystalEnhancer />
                                <OilsFatsAntiCrystallization />
                                <Beverages />
                            </Fade>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(AntiCloudingCloudingAgents)