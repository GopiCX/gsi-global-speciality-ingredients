import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Button } from 'antd';
import './AboutUs.scss'

class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="gsi-about pattern-1 py-5">
                    <div className="container mx-auto ">
                        <Row gutter={[30, 20]} align="center" className="pb-3 ">
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} className="center-contents" >
                                <div className="pb-2 middle-content">
                                    <h1 className="text-red text-uppercase pb-2">Sri Arch Media and entertainment</h1>
                                    <p className="text-black">Sri Arch Media is a new bee in the film industry aiming to provide service and support to the entertainment industry. Our focus ensures that Sri Arch Media is  and will always be a renowned production center.</p>
                                    <Link to="#">Read More</Link>
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} className="center-contents" >
                                <div className="pb-2 middle-content">
                                
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default withRouter(AboutUs)