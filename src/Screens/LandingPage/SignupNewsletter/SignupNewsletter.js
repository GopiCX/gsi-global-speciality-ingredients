import React from 'react';
import { withRouter } from 'react-router';
import InputBox from '../../../Components/InputBox/InputBox';
import { Row, Col, Button } from 'antd';
import './SignupNewsletter.scss';

class SignupNewsletter extends React.Component {
    constructor() {
        super()
        this.state = {
            defaultActiveKey: [],
            mobileNumber: '',
            fullName: '',
            emailId: '',
            phoneNumber: '',
        }
    }
    onChangeText = (value, type) => {
        this.setState({ [type]: value })
    }
    render() {
        return (
            <React.Fragment>
                <section className="subscribe-newsletter pattern-texture py-5">
                    <div className="container mx-auto ">
                        <Row gutter={[30, 20]} align="center">
                            <Col
                                xs={{ span: 24 }}
                                sm={{ span: 15 }}
                                md={{ span: 15 }}
                                lg={{ span: 15 }}
                            >
                                <h1 className="text-black text-uppercase">SUBSCRIBE TO OUR NEWSLETTER</h1>
                            </Col>
                            <Col
                                xs={{ span: 24 }}
                                sm={{ span: 9 }}
                                md={{ span: 9 }}
                                lg={{ span: 9 }}
                            >
                                <div className="subscrption-form">
                                <form>
                                    <div className="form-fields">
                                        <InputBox
                                            placeholder="Enter Email Address"
                                            id="emailAddress"
                                            value={this.state.emailAddress}
                                            onChangeText={this.onChangeText}
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-fields">
                                        <Button type="primary">Subscribe</Button>
                                    </div>
                                </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                
            </React.Fragment>
        )
    }
}
export default withRouter(SignupNewsletter)