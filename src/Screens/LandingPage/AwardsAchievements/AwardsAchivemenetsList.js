import React from "react";
import { withRouter } from "react-router";
import { Row, Col } from "antd";
import Fade from 'react-reveal/Fade';
import './AwardsAchievements.scss'

class AwardsAchivemenetsList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row align="center">
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className="text-center">
                        <Fade>
                            <img src={this.props.AwardImg} alt={`${this.props.ShortDesc}`} />
                        </Fade>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className="bg-blue space text-white  px-lg-3 center-contents">
                        <div className="awards middle-content">
                            <Fade top>
                                <h2 className="border-left-3 text-white  d-inline border-danger pl-3 mb-3">Awards & Achievements</h2>
                                <span className="d-block">{this.props.AwardYear}</span>
                                <p  className="mt-2" >{this.props.ShortDesc}</p>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </React.Fragment >
        );
    }
}
export default withRouter(AwardsAchivemenetsList);
