import React from "react";
import { withRouter } from "react-router";
import Slider from "react-slick";
import { Row, Col } from "antd";
import "../ConfectionerySolutions/ConfectionerySolutions.scss";
import SliderBox from "../../Components/SliderBox/SliderBox";
import { solutionImg } from "../../Util/solutionData";

class FryingOilFiltrationFryingOilRecoverySolutions extends React.Component {
  constructor() {
    super();
    this.state = {
      showMoreinfo: false,
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="solutions-grids less-content card mb-3">
          <Row align="center">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <SliderBox solutionImages={solutionImg.FryingOilFlteration} />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 18 }}
              lg={{ span: 18 }}
              className="p-3 p-sm-4 p-md-4 p-lg-4 "
            >
              <h3 className="text-blue">
                Frying Oil Filtration & Frying Oil Recovery Solutions
              </h3>
              <Row
                gutter={[20, 20]}
                className={
                  this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"
                }
              >
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  className="border-right"
                >
                  <div className="details">
                    <h5 className="text-red">Products</h5>
                    <ul>
                      <li>DALSORB®</li>
                    </ul>
                  </div>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  className="border-right"
                >
                  <div className="details">
                    <h5 className="text-red">Primary Applications</h5>
                    <ul>
                      <li>Frying Oil</li>
                    </ul>
                  </div>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                >
                  <div className="details">
                    <h5 className="text-red">Key Benefits</h5>
                    <ul>
                      <li>
                        DALSORB® removes degradation compounds before they can
                        buildup and destroy oil. Extends the frying life of the
                        frying oil. Improve the quality of the frying oil during
                        it frying life. Ensure consistent high quality fried
                        foods
                      </li>
                      <li>Cleaner fryer and accessories (pipes, HE,..)</li>
                      <li>
                        Improve shelf life & colour of product (colour of oil)
                      </li>
                      <li>
                        Removal off-taste and off-odour from the oil (frying
                        products)
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <button
            className={
              this.state.showMoreinfo
                ? "btn ant-btn-primary visible"
                : "btn ant-btn-primary not-visible"
            }
            onClick={() =>
              this.setState({ showMoreinfo: !this.state.showMoreinfo })
            }
          >
            {this.state.showMoreinfo ? "Show Less" : "Show More"}
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(FryingOilFiltrationFryingOilRecoverySolutions);
