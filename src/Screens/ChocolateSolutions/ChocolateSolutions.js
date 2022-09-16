import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import ChocolateProducts from './ChocolateProducts';
import ChocolateBasedCentre from './ChocolateBasedCentre';


class ChocolateSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleSection className="chocolate-solutions" welcomeText="Welcome to Global peciality Ingredients" titleName="Chocolate Solutions" />

                <section className="gsi-solutions py-5">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">Discover how GSI products help you to create unique appearances, textures, and mouthfeels of chocolate products.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <ChocolateProducts />
                            <ChocolateBasedCentre />
                        </div>
                    </div>
                </section>

                <section className="pb-4">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} className='text-center'>
                                <Link to="/key-account-manager" className='btn'>For further inquiry, Meet Your Key Account Manager!</Link>
                            </Col>
                        </Row>
                    </div>
                </section>

            </React.Fragment >
        )
    }
}
export default withRouter(ChocolateSolutions)