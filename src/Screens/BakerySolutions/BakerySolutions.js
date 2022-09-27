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

class BakerySolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection className="bakery-solutions" welcomeText="WELCOME TO GLOBAL SPECIALITY INGREDIENTS" titleName="Bakery Solutions" />

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