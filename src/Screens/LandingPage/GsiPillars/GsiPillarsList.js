import { Col, Row } from "antd";
import React from "react";
import { Fade } from "react-reveal";
import { withRouter } from "react-router-dom";

class GsiPillarsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row align="center">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            className="text-center"
          >
            <Fade>
              <img src={this.props.PillarImg} alt={this.props.PillarName} className="w-full pillar-img" />
            </Fade>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} className="space text-white  px-lg-3 center-contents">
            <div className="pillars middle-content">
              <Fade top>
                <h2 className="border-left-3 text-white  d-inline border-blue pl-3 mb-3">{this.props.PillarName}</h2>
                <p  className="mt-2" >{this.props.ShortDesc}</p>
              </Fade>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default withRouter(GsiPillarsList);
