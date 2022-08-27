import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./Home.scss";
import HomeSlider from "./HomeSlider/HomeSlider";
import SriArchProduction from "../../assets/images/production.png";
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* main slider starts */}
        <HomeSlider />
        {/* main slider ends */}

        <section className="why-sri-arch-media pattern-1 py-5">
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
                  <img src={SriArchProduction} title="sri arch Media" alt="Sri Arch Media and Entertainment" className="m-auto w-75" />
                </div>
              </Col>
            </Row>
          </div>
        </section>


      </React.Fragment>
    );
  }
}
