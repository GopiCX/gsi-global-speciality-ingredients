import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Row, Button, Col, Input, Tooltip } from "antd";
import mainlogo from "../assets/images/gsi-logo.svg";
import functionalIngredients from "../assets/images/Functional-Ingredients-Tailored-to-your-needs.svg"
export let setHeader = false;
export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-hearder">
          <div className="container mx-auto">
            <div className="top-header">
              <Row>
                <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                  <div className="logo pr-3">
                    <Link to="/">
                      <img src={mainlogo} alt="GSI - Global Specialty Ingredients | Your Innovation Our Solution" />
                    </Link>
                  </div>
                </Col>
                <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 15, order: 2 }} lg={{ span: 15, order: 2 }}>
                  <div className="center-header">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About</Link>
                      </li>
                      <li>
                        <Link to="/team">Our Solution</Link>
                      </li>
                      <li>
                        <Link to="/movies">Responsibility</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                      <li>
                        <Link to="#">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={{ span: 24, order: 3 }} sm={{ span: 24, order: 3 }} md={{ span: 5, order: 3 }} lg={{ span: 5, order: 3 }}>
                  <div className="functional-ingredient  pl-4">
                    <Link to="/">
                      <img src={functionalIngredients} alt="Functional Ingredients Tailored to your needs" />
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
