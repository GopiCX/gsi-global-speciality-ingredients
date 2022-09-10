import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./Home.scss";
import HomeSlider from "./HomeSlider/HomeSlider";
import AwardsAchievements from "./AwardsAchievements/AwardsAchievements";
import yourInnovation from "../../assets/images/your-innovation-our-solution.png";
import developmentProduct from "../../assets/images/development-of-product-and-capability-spectrum.png";
import researchDevelopment from "../../assets/images/01-research-development.svg";
import projectManagement from "../../assets/images/02-project-management.svg";
import processDevelopment from "../../assets/images/03-process-development-improvement.svg";
import confectionerySolutions from "../../assets/images/00-confectionery-solutions.png";
import bakerySolution from "../../assets/images/01-bakery-solutions.png";
import shelfLife from "../../assets/images/02-shelf-life-frying-solutions.png";
import oilFat from "../../assets/images/03-oil-Fat-solutions.png";
import viewAll from "../../assets/images/01-bakery-solutions.png";
import innovationWheel from "../../assets/images/05-innovation-wheel-wheel-new.png"
import commitment from "../../assets/images/04-commitment.png"
import competence from "../../assets/images/04-competence.png"
import customerSatisfactionSurvey from "../../assets/images/04-customer-satisfaction-survey.png"
import innovation from "../../assets/images/04-innovation.png"
import productPerformance from "../../assets/images/04-product-performance.png"
import baker from "../../assets/images/baker.svg"
import rectangleShape from "../../assets/images/patterns/shape-1.png"
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* main slider starts */}
        <HomeSlider />
        {/* main slider ends */}

        <section className="pattern-1 py-5">
          <div className="container mx-auto py-3">
            <Row gutter={[30, 20]} align="center" className="pb-3 ">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 17 }} lg={{ span: 17 }} >
                <div className="pb-2 pr-lg-4">
                  <h1 className="border-left-3 border-danger text-blue pl-3 mb-3">Your Innovation Our Solution</h1>
                  <p className="text-black mb-2">We at Global Specialty Ingredients through research and development, are committed and passionate in helping customers to provide innovative ideas and solutions on product innovation by bringing revolutionary innovation ideas and skills to a sustainable level.</p>
                  <p className="text-black">Our innovations are backed by decades of experience and extensive knowledge of innovation by listening to and collaborating with our customers.</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 7 }} lg={{ span: 7 }} >
                <div className="pb-2">
                  <img src={yourInnovation} alt="your innovation our solution" className="rounded w-100" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="bg-blue pattern-2  py-5">
          <div className="container mx-auto py-3">
            <Row gutter={[30, 20]} align="center" className="pb-3 ">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <div className="pb-2 pr-lg-4">
                  <h1 className="border-left-3 border-danger text-white pl-3 mb-3">Development of Product and Capability Spectrum</h1>
                  <p className="text-black text-white mb-2">GSI has a variety of ingredients and capabilities that can help you with your product development innovation and know-how on process technology which can help you achieve your expectation.</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <div className="pb-2">
                  <img src={developmentProduct} alt="your innovation our solution" className="w-100" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="value-proposition pb-5">
          {/* <img src={rectangleShape} className="shape-position" alt="shape"/> */}
          <div className="container mx-auto pb-3">
            <div className="border border-2 border-top-0 border-danger">
              <div className="p-4">
                <div className="title-section text-center mb-4 pt-4">
                  <h1 className="text-blue text-center d-inline border-right-3 border-danger  pr-3">Our Value Proposition</h1>
                  <p className="text-left mt-3">We offer a unique value proposition that differentiates us from our competitors. Our approach is customer-centric, and we focus on providing the best possible services and products.</p>
                </div>
                <Row gutter={[30, 20]} align="center" className="pb-3 ">
                  <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} className="text-center px-lg-3">
                    <div className="text-center px-lg-4">
                      <img src={researchDevelopment} alt="Research & Development" className="mb-3" />
                      <h3 className="mb-3 text-blue">Research <br />& Development</h3>
                      <p>Product Development, Food or Recipe Formulations, Raw Material Variations, Formula Costing​</p>
                    </div>
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }}>
                    <div className="text-center px-lg-4">
                      <img src={projectManagement} alt="Project Management​" className="mb-3" />
                      <h3 className="mb-3 text-blue">Project <br />Management​</h3>
                      <p>Technical Feasibility, Technology Assessment, Turnkey Project, Plant and Machinery Execution​</p>
                    </div>
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} className="text-center px-lg-3">
                    <div className="text-center px-lg-4">
                      <img src={processDevelopment} alt="Process Development & Improvement​" className="mb-3" />
                      <h3 className="mb-3 text-blue">Process Development <br />& Improvement​</h3>
                      <p>Technical Feasibility, Technology Assessment, Turnkey Project, Plant and Machinery Execution​</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-gradient py-5">
          <div className="container mx-auto py-3">
            <Row gutter={[30, 20]} align="center" className="text-white pb-3 ">
              <Col xs={{ span: 24 }} sm={{ span: 10 }} md={{ span: 10 }} lg={{ span: 10 }} >
                <h2 className="border-left-3 text-white  border-danger pl-3 mb-3">GSI Shared Values</h2>
                <p className="mt-3">We share common values. These values guide our actions and help us work together as a team. We believe in being honest and working together to solve problems.</p>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 14 }} md={{ span: 14 }} lg={{ span: 14 }}>

              </Col>
            </Row>
          </div>
        </section>

        <section className="gsi-shared-value align-top">
          <div className="container mx-auto">
            <Row gutter={[22, 20]} className="mb-3">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} >
                <div className="card d-flex">
                  <div className="image">
                    <img src={commitment} alt="Commitment" />
                  </div>
                  <div className="details p-3 p-lg-4">
                    <h5 className="text-blue">Commitment</h5>
                    <p>GSI employees are the heart of our business</p>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} >
                <div className="card d-flex">
                  <div className="image">
                    <img src={innovation} alt="Innovation" />
                  </div>
                  <div className="details p-3 p-lg-4">
                    <h5 className="text-blue">Innovation</h5>
                    <p>Thinking out of the box</p>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} >
                <div className="card d-flex">
                  <div className="image">
                    <img src={productPerformance} alt="Product Performance" />
                  </div>
                  <div className="details p-3 p-lg-4">
                    <h5 className="text-blue">Product Performance</h5>
                    <p>Continuous cycle of improvement</p>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} >
                <div className="card d-flex">
                  <div className="image">
                    <img src={commitment} alt="Competence" />
                  </div>
                  <div className="details p-3 p-lg-4">
                    <h5 className="text-blue">Competence</h5>
                    <p>Continuous cycle of improvement</p>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 10 }} >
                <div className="card d-flex">
                  <div className="image">
                    <img src={customerSatisfactionSurvey} alt="Customer Satisfaction Survey" />
                  </div>
                  <div className="details p-3 p-lg-4">
                    <h5 className="text-blue">Customer Satisfaction Survey</h5>
                    <p>Identify customer hidden opportunities</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={[22, 20]} >
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className="baker text-left text-md-center text-lg-right" >
                <img src={baker} alt="Baker" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="innovation-wheel bg-red-gradient py-5">
          <div className="container mx-auto py-3">
            <Row gutter={[30, 20]} align="center" className="text-white pb-3 ">
              <Col xs={{ span: 24 }} sm={{ span: 10 }} md={{ span: 10 }} lg={{ span: 10 }} >
                <h2 className="border-left-3 border-blue text-white pl-3 mb-3">Innovation Wheel</h2>
                <p className="mt-3">The innovation wheel is a model that helps GSI to increase innovation by implementing a systematic process approach for innovation.</p>
                <p className="mt-3">This process helps GSI to recognize areas of potential discovery, improvement, and strength.</p>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 14 }} md={{ span: 14 }} lg={{ span: 14 }}>
                <div className="wheel">
                  <img src={innovationWheel} alt="Innovation Wheel" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="cutting-edge-solution py-5">
          <div className="container mx-auto py-3">
            <div className="title-section mb-4">
              <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Our Cutting Edge Solutions</h2>
              <p className="text-left mt-3">Our extraordinary ingredients are product of technical expertise, <br />meticulous research and innovation of listening to and working with our customers.</p>
            </div>
            <div className="card-holder">
              <div className="card-box">
                <div className="details">
                  <img src={confectionerySolutions} alt="Process Development & Improvement​" />
                  <div class="title">
                    <h6>Confectionery <br />Solutions</h6>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <div className="details">
                  <img src={bakerySolution} alt="Process Development & Improvement​" />
                  <div class="title">
                    <h6>Bakery <br />Solutions</h6>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <div className="details">
                  <img src={shelfLife} alt="Process Development & Improvement​" />
                  <div class="title">
                    <h6>Shelf Life & <br /> Frying Solutions</h6>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <div className="details">
                  <img src={oilFat} alt="Oil & Fat Solutions" />
                  <div class="title">
                    <h6>Oil & Fat <br />Solutions</h6>
                  </div>
                </div>
              </div>
              <div className="card-box ">
                <div className="details">
                  <img src={viewAll} alt="View All Solutions" />
                  <div class="title">
                    <h6>View All Solutions</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AwardsAchievements />


      </React.Fragment>
    );
  }
}
