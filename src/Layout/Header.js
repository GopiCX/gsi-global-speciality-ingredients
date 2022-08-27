import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Row, Button, Col, Input, Tooltip } from "antd";
import mainlogo from "../assets/images/gsi-logo.svg";

export let setHeader = false;
export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-hearder">
          <div className="container mx-auto">
            <div className="top-header">
              <Row>
                <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>
                  <div className="left-section">
                    <div className="logo">
                      <Link to="/">
                        <img src={mainlogo} alt="GSI - Global Specialty Ingredients | Your Innovation Our Solution" />
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 15, order: 2 }} lg={{ span: 15, order: 2 }}>
                  <div className="center-header">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About us</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                      <li>
                        <Link to="/movies">Movies</Link>
                      </li>
                      <li>
                        <Link to="#">News</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={{ span: 24, order: 3 }} sm={{ span: 24, order: 3 }} md={{ span: 3, order: 3 }} lg={{ span: 3, order: 3 }} align="right">
                  <div className="signin-signup circle-shape text-right text-uppercase">
                    <Link to="./contact-us">
                      <Button type="primary" className="text-uppercase">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>

            {/* bottom header starts */}

            {/* bottom header ends */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
