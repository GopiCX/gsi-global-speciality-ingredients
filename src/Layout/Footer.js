import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Row, Col, BackTop } from 'antd';
import './Footer.scss'

export default class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="footer pattern-3 py-5">
                    <div className="container mx-auto">
                        <Row gutter={[12, 22]}>
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                                
                            </Col>                              
                        </Row>
                        
                        <Row gutter={[12, 22]} className="copyright-text mt-4 pb-3">
                            <Col className="text-center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                <p className="text-white pt-4">© {(new Date().getFullYear())} Copyright GSI. All Right reserved.</p>
                            </Col>
                        </Row>
                    </div>
                </section>
                <BackTop>
                    <div className="back-to-top">UP</div>
                </BackTop>
            </React.Fragment>
        );
    }
}