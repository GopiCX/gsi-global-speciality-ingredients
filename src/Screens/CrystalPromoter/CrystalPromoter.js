import React from 'react';
import { withRouter } from 'react-router';
import TitleSection from '../../Components/TitleSection/TitleSection';
import { bgImages } from '../../Util/data';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Fade from 'react-reveal/Fade';
import CrystalEnhancer from "./CrystalEnhancer";

class CrystalPromoter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection sliderImages={bgImages.CrystalPromoter} className="Crystal-promoter" welcomeText="" titleName="Crystal Promoter" />
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
                                <CrystalEnhancer />
                            </Fade>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        )
    }
}
export default withRouter(CrystalPromoter)