import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import "./Home.scss";
import HomeSlider from "./HomeSlider/HomeSlider";
import AwardsAchievements from "./AwardsAchievements/AwardsAchievements";
import yourInnovation from "../../assets/images/your-innovation-our-solutions.png";
import developmentProduct from "../../assets/images/development-of-product-and-capability-spectrum.png";
import researchDevelopment from "../../assets/images/01-research-development.svg";
import projectManagement from "../../assets/images/02-project-management.svg";
import processDevelopment from "../../assets/images/03-process-development-improvement.svg";
import confectionerySolutions from "../../assets/images/our-solutions/confectionery-solutions.jpg";
import bakerySolution from "../../assets/images/our-solutions/bakery-solutions.jpg";
import shelfLife from "../../assets/images/our-solutions/shelf-life-frying-solutions.jpg";
import oilFat from "../../assets/images/our-solutions/oil-fat-solutions.jpg";
import viewAll from "../../assets/images/view-all.png";
import innovationWheel from "../../assets/images/05-innovation-wheel-wheel-new.png";
import innovationWheelCircle from "../../assets/images/05-innovation-wheel-wheel.png";
import commitment from "../../assets/images/04-commitment.png";
import competence from "../../assets/images/04-competence.png";
import customerSatisfactionSurvey from "../../assets/images/04-customer-satisfaction-survey.png";
import innovation from "../../assets/images/04-innovation.png";
import productPerformance from "../../assets/images/04-product-performance.png";
import baker from "../../assets/images/baker.svg";
import quoteTop from "../../assets/images/icons/quote-1.svg";
import quoteBottom from "../../assets/images/icons/quote-2.svg";
import { Helmet } from "react-helmet";
import GsiPillars from "../../assets/images/5-pillars-of-gsi.svg";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          
          <meta charSet="utf-8" />
          <title>
            Global Specialty Ingredients | Offer extensive range of natural
            ingredients & products
          </title>
          <meta name="title" content="" />
          <meta
            name="description"
            content="GSI is a leading global ingredients solutions company manufactured, and supplier of value-added Functional Ingredients"
          />
          <meta
            name="keywords"
            content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour,"
          />

          <meta
            name="og:title"
            content="Global Specialty Ingredients | Offer extensive range of natural ingredients & products"
          />
          <meta name="og:description" content="" />
          
        </Helmet>
        {/* main slider starts */}
        <HomeSlider />
        {/* main slider ends */}

        <section className="your-innovation pattern-1 py-5 p-mob">
          <div className="container mx-auto py-3">
            <Row gutter={[30, 20]} align="middle" className="pb-3 ">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 17 }}
                lg={{ span: 17 }}
              >
                <div className="pb-2 pr-lg-4">
                  <Fade>
                    <h1 className="border-left-3 border-danger text-blue pl-3 mb-3">
                      Your Innovation Our Solution
                    </h1>
                    <p className="text-black mb-2">
                      We at Global Specialty Ingredients through research and
                      development, are committed and passionate in helping
                      customers to provide innovative ideas and solutions on
                      product innovation by bringing revolutionary innovation
                      ideas and skills to a sustainable level.
                    </p>
                    <p className="text-black">
                      Our innovations are backed by decades of experience and
                      extensive knowledge of innovation by listening to and
                      collaborating with our customers.
                    </p>
                  </Fade>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 7 }}
                lg={{ span: 7 }}
              >
                <div className="overflow-hidden border-radius">
                  <Fade>
                    <img
                      src={yourInnovation}
                      alt="your innovation our solution"
                      className="animation-grow rounded w-100"
                    />
                  </Fade>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="development-product bg-blue  pattern-2  py-5 p-mob">
          <div className="container mx-auto py-3">
            <Row gutter={[30, 20]} align="middle">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 11 }}
                md={{ span: 11 }}
                lg={{ span: 11 }}
              >
                <div className="pb-2 pr-lg-4">
                  <Fade>
                    <h1 className="border-left-3 border-danger text-white pl-3 mb-3">
                      Development of Product and Capability Spectrum
                    </h1>
                    <p className="text-black text-white mb-2">
                      GSI has a variety of ingredients and capabilities that can
                      help you with your product development innovation and
                      know-how on process technology which can help you achieve
                      your expectation.
                    </p>
                  </Fade>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 13 }}
                md={{ span: 13 }}
                lg={{ span: 13 }}
              >
                <Fade>
                  <img
                    src={developmentProduct}
                    alt="your innovation our solution"
                  />
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="value-proposition pb-5 p-mob">
          {/* <img src={rectangleShape} className="shape-position" alt="shape"/> */}
          <div className="container mx-auto pb-3">
            <div className="border border-2 border-top-0 border-danger">
              <div className="p-4">
                <Fade>
                  <div className="title-section text-center mb-4 pt-4">
                    <h1 className="text-blue text-center d-inline border-right-3 border-danger  pr-3">
                      Our Value Proposition
                    </h1>
                    <p className="text-left mt-3">
                      We offer a unique value proposition that differentiates us
                      from our competitors. Our approach is customer-centric,
                      and we focus on providing the best possible services and
                      products.
                    </p>
                  </div>
                </Fade>
                <Row gutter={[30, 20]} align="center" className="pb-3 ">
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 8 }}
                    md={{ span: 8 }}
                    lg={{ span: 8 }}
                    className="text-center px-lg-3"
                  >
                    <Bounce>
                      <div className="text-center px-lg-4">
                        <img
                          src={researchDevelopment}
                          alt="Research & Development"
                          className="mb-3"
                        />
                        <h3 className="mb-3 text-blue">
                          Research <br />& Development
                        </h3>
                        <p>
                          Product Development, Food or Recipe Formulations, Raw
                          Material Variations, Formula Costing​
                        </p>
                      </div>
                    </Bounce>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 8 }}
                    md={{ span: 8 }}
                    lg={{ span: 8 }}
                  >
                    <Bounce>
                      <div className="text-center px-lg-4">
                        <img
                          src={projectManagement}
                          alt="Project Management​"
                          className="mb-3"
                        />
                        <h3 className="mb-3 text-blue">
                          Project <br />
                          Management​
                        </h3>
                        <p>
                          Technical Feasibility, Technology Assessment, Turnkey
                          Project, Plant and Machinery Execution​
                        </p>
                      </div>
                    </Bounce>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 8 }}
                    md={{ span: 8 }}
                    lg={{ span: 8 }}
                    className="text-center px-lg-3"
                  >
                    <Bounce>
                      <div className="text-center px-lg-4">
                        <img
                          src={processDevelopment}
                          alt="Process Development & Improvement​"
                          className="mb-3"
                        />
                        <h3 className="mb-3 text-blue">
                          Process Development <br />& Improvement​
                        </h3>
                        <p>
                          Process Auditing,Process Loss audits,Process
                          Reengineering​
                        </p>
                      </div>
                    </Bounce>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-gradient py-5 p-mob">
          <div className="container mx-auto py-3">
            <Row gutter={[30, 20]} align="center" className="text-white pb-3 ">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 10 }}
                md={{ span: 10 }}
                lg={{ span: 10 }}
              >
                <Fade>
                  <h2 className="border-left-3 text-white  border-danger pl-3 mb-3">
                    GSI Shared Values
                  </h2>
                  <p className="mt-3">
                    We share common values. These values guide our actions and
                    help us work together as a team. We believe in being honest
                    and working together to solve problems.
                  </p>
                </Fade>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 14 }}
                md={{ span: 14 }}
                lg={{ span: 14 }}
                className="text-right quote-icon"
              >
                <Fade right>
                  <img src={quoteTop} alt="quote" />
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="gsi-shared-value pb-custom align-top p-mob">
          <div className="container mx-auto">
            <Row gutter={[20, 20]} className="mb-3">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Fade>
                  <div className="card">
                    <div className="image overflow-hidden">
                      <img src={commitment} alt="Commitment" />
                    </div>
                    <div className="details">
                      <h5 className="text-blue">Commitment</h5>
                      <p>GSI employees are the heart of our business</p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Fade>
                  <div className="card">
                    <div className="image overflow-hidden">
                      <img src={innovation} alt="Innovation" />
                    </div>
                    <div className="details">
                      <h5 className="text-blue">Innovation</h5>
                      <p>Thinking out of the box</p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Fade>
                  <div className="card">
                    <div className="image overflow-hidden">
                      <img src={productPerformance} alt="Product Performance" />
                    </div>
                    <div className="details">
                      <h5 className="text-blue">Product Performance</h5>
                      <p>Continuous cycle of improvement</p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Fade>
                  <div className="card">
                    <div className="image overflow-hidden">
                      <img src={competence} alt="Competence" />
                    </div>
                    <div className="details">
                      <h5 className="text-blue">Competence</h5>
                      <p>Integrity and positive thinking </p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Fade>
                  <div className="card">
                    <div className="image overflow-hidden">
                      <img
                        src={customerSatisfactionSurvey}
                        alt="Customer Satisfaction Survey"
                      />
                    </div>
                    <div className="details">
                      <h5 className="text-blue">
                        Customer Satisfaction Survey
                      </h5>
                      <p>Identify customer hidden opportunities</p>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>

            <Row gutter={[22, 20]}>
              <Fade>
                <img
                  src={quoteBottom}
                  className="quote-bottom"
                  alt="Quote Bottom"
                />
              </Fade>
              {/* <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className="baker text-left text-md-center text-lg-right" >
                <img src={baker} alt="Baker" />
              </Col> */}
            </Row>
          </div>
        </section>

        <section className="innovation-wheel bg-red-gradient py-5 p-mob">
          <div className="container mx-auto py-3">
            <Row
              gutter={[30, 20]}
              align="center"
              className="text-white pb-md-3 pb-lg-3 "
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 10 }}
                md={{ span: 10 }}
                lg={{ span: 10 }}
              >
                <Fade>
                  <h2 className="border-left-3 border-blue text-white pl-3 mb-3">
                    Innovation Wheel
                  </h2>
                  <p className="mt-3">
                    The innovation wheel is a model that helps GSI to increase
                    innovation by implementing a systematic process approach for
                    innovation.
                  </p>
                  <p className="mt-3">
                    This process helps GSI to recognize areas of potential
                    discovery, improvement, and strength.
                  </p>
                </Fade>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 14 }}
                md={{ span: 14 }}
                lg={{ span: 14 }}
              >
                <div className="wheel">
                  <Fade>
                    <img
                      src={innovationWheel}
                      alt="Innovation Wheel"
                      className="innovation-wheel-jpg"
                    />
                    <img
                      src={innovationWheelCircle}
                      alt="Innovation Wheel"
                      className="innovation-wheel-circle"
                    />
                  </Fade>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="gsi-pillars  p-mob">
          <div className="container mx-auto lg-py-5">
            <Fade>
              <Row>
                <Col xs={{ span: 24 }} md={{ span: 10 }}>
                  <div className="gsi-pillars__heading">
                    <h2 className="text-center">5</h2>
                    <h2 className="text-center">PILLARS OF GSI</h2>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 10 }}>
                  <img src={GsiPillars} className="gsi-pillars__image" alt="" />
                </Col>
              </Row>
              <Row justify="space-between" gutter={[12, 12]}>
                <Col xs={{ span: 24 }}>
                  <h5 className="text-center mt-5 text-red">
                    Creating Distinctive Value
                  </h5>
                  <p className="text-center">
                    Creating distinctive value for our customers is important to
                    us. By doing this, we win their loyalty and retain their
                    business. There are many ways to achieve success in GSI, and
                    it takes a mix of five key pillar.
                  </p>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 4 }}>
                  <p>
                    The{" "}
                    <span className="text-blue">
                      <b>collaboration</b>
                    </span>{" "}
                    pillar is a key part of GSI strategy for fostering
                    collaboration among its employees. It helps promote a
                    collaborative environment where employees are able to work
                    together to achieve common goals.
                  </p>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 4 }}>
                  <p>
                    The{" "}
                    <span className="text-blue">
                      <b>innovation</b>
                    </span>{" "}
                    pillar is a key part of our strategy to keep our business at
                    the forefront of the latest trends and technologies. We are
                    constantly exploring new ways to improve our products and
                    services, and to stay ahead of the competition.
                  </p>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 4 }}>
                  <p>
                    The{" "}
                    <span className="text-blue">
                      <b>sustainability</b>
                    </span>{" "}
                    pillar promotes the responsible use of natural resources,
                    promotes environmentally friendly practices, and encourages
                    the development of green technologies.
                  </p>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 4 }}>
                  <p>
                    The{" "}
                    <span className="text-blue">
                      <b>transformation</b>
                    </span>{" "}
                    pillar can help businesses transform their operations and
                    achieve their goals. By providing guidance and support,
                    therefor businesses can turn around their performance
                    quickly and achieve success.
                  </p>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 4 }}>
                  <p>
                    The{" "}
                    <span className="text-blue">
                      <b>strategic intent</b>
                    </span>{" "}
                    pillar is to achieve a specific and long-term goal. This
                    might include developing a plan to achieve a certain
                    objective, determining the most important factors to
                    consider when making a decision, or setting priorities.
                  </p>
                </Col>
                <Col xs={{ span: 24 }}>
                  <h5 className="mt-5 text-center text-red">Leadership</h5>
                  <p className="text-center">
                    GSI strength to lead a team to achieve a common goal. With
                    ability to communicate effectively with our team, stay
                    organized and keep them motivated. By providing guidance and
                    direction.
                  </p>
                </Col>
              </Row>
            </Fade>
          </div>
        </section>

        <section className="cutting-edge-solution py-5 p-mob">
          <div className="container mx-auto py-lg-3">
            <Fade>
              <div className="title-section mb-4">
                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">
                  Our Cutting Edge Solutions
                </h2>
                <p className="text-left mt-3">
                  Our extraordinary ingredients are product of technical
                  expertise, <br />
                  meticulous research and innovation of listening to and working
                  with our customers.
                </p>
              </div>
            </Fade>
            <div className="card-holder">
              <Fade>
                <div className="card-box">
                  <Link to="/confectionery-solutions">
                    <div className="details overflow-hidden border-radius">
                      <img
                        src={confectionerySolutions}
                        alt="Process Development & Improvement​"
                      />
                      <div className="title">
                        <h6>
                          Confectionery <br />
                          Solutions
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>
              <Fade>
                <div className="card-box">
                  <Link to="/bakery-solutions">
                    <div className="details overflow-hidden border-radius">
                      <img
                        src={bakerySolution}
                        alt="Process Development & Improvement​"
                      />
                      <div className="title">
                        <h6>
                          Bakery <br />
                          Solutions
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>
              <Fade>
                <div className="card-box">
                  <Link to="/shelf-life-solutions">
                    <div className="details overflow-hidden border-radius">
                      <img
                        src={shelfLife}
                        alt="Process Development & Improvement​"
                      />
                      <div className="title">
                        <h6>
                          Shelf Life <br /> Solutions
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>
              <Fade>
                <div className="card-box">
                  <Link to="/oil-fat-solutions">
                    <div className="details overflow-hidden border-radius">
                      <img src={oilFat} alt="Oil & Fat Solutions" />
                      <div className="title">
                        <h6>
                          Oil & Fat <br />
                          Solutions
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>
              <Fade>
                <div className="card-box ">
                  <Link to="/our-solutions">
                    <div className="details bg-grid overflow-hidden border-radius">
                      <img src={viewAll} alt="View All Solutions" />
                      <div className="center-align text-center">
                        <h6 className="text-white text-center">
                          View All
                          <br />
                          Solutions
                        </h6>
                        <i className="fa fa-chevron-circle-right text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <AwardsAchievements />
      </React.Fragment>
    );
  }
}
