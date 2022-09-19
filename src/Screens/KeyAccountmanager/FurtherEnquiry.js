import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import '../ConfectionerySolutions/ConfectionerySolutions.scss';


class FurtherEnquiry extends React.Component {
    render() {
        return (
            <React.Fragment>

                <section className="pb-4 p-mob further-enquiry">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} className='text-center'>
                                <h4 className="text-center">For further inquiry</h4>
                                <Link to="/key-account-manager" className='btn ant-btn-primary'>Meet Your Key Account Manager!</Link>
                            </Col>
                        </Row>
                    </div>
                </section>

            </React.Fragment >
        )
    }
}
export default withRouter(FurtherEnquiry)