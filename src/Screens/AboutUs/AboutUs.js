import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import TitleSection from '../../Components/TitleSection/TitleSection';
import Fade from 'react-reveal/Fade';
import './AboutUs.scss'
import awardWinninggsi from "../../assets/images/about/award-winning-gsi.jpg";
import gsiSuccessJourney from "../../assets/images/about/gsi-success-journey.svg"
import marketed from "../../assets/images/about/marketed.png";
import employeesGlobally from "../../assets/images/about/employees-globally.png";
import ourMission from "../../assets/images/about/our-mission.png";
import ourVission from "../../assets/images/about/our-vision.png";
import integrityImg from "../../assets/images/about/integrity.png";
import innovationImg from "../../assets/images/about/innovation.png";
import continualImprovement from "../../assets/images/about/continual-improvement.png";
import positiveAttitude from "../../assets/images/about/positive-attitude.png"
import commitmentExcellence from "../../assets/images/about/commitment-to-excellence.png"
import corporatePhilosophy from "../../assets/images/about/corporate-philosophy.svg"
import robertSmanantha from "../../assets/images/about/robert-samantha.png"
// group-companies
import logo1 from "../../assets/images/group-companies/logo-1.png";
import logo2 from "../../assets/images/group-companies/logo-2.png";
import logo3 from "../../assets/images/group-companies/logo-3.png";
import logo4 from "../../assets/images/group-companies/logo-4.png";
import logo5 from "../../assets/images/group-companies/logo-5.png";
import logo6 from "../../assets/images/group-companies/logo-6.png";
import logo7 from "../../assets/images/group-companies/logo-7.png";
import logo8 from "../../assets/images/group-companies/logo-8.png";
import logo9 from "../../assets/images/group-companies/logo-9.png";
import { bgImages } from '../../Util/data';
class AboutUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitleSection sliderImages={bgImages.about} className="aboutus" welcomeText="WELCOME TO GLOBAL SPECIALTY INGREDIENTS" titleName="Who We are" />

        <section className="who-we-are py-5  p-mob">
          <div className="container mx-auto">
            <Fade>
              <h1 className="text-blue">GS<span className="text-red">I</span> was founded in <span className="text-red">2005</span> with a strong focus on product reliability and sustainability for food and non-food industries.</h1>
            </Fade>
            <Row gutter={[20, 20]} align="center">
              <Col xs={{ span: 24, order: 2 }} sm={{ span: 16, order: 2 }} md={{ span: 16, order: 1 }} lg={{ span: 16, order: 1 }} >
                <div className="pr-lg-4">
                  <Fade>
                    <p className="mt-4">GSI is a leading global ingredients solutions company manufactured, and supplier of value-added Functional Ingredients, <span className="text-red">TAILORED</span> <span className="text-blue">TO YOUR NEEDS</span>, we offer an extensive range of natural food ingredients, functional food ingredients, specialty ingredients, ingredients through products, and consumer’s products like vegetable oils and fats, baking, beverages, snacks, meat processing, confectionery, dairy, biodiesel, oleochemical, and personal care.</p>
                    <p className="mt-4">The cornerstone of our business is our profound knowledge of specialty ingredients which we tailored according to manufacturers and industries requirements, locally and abroad. GSI developed innovative specialty ingredients whereby our customers can count on us for a reliable supply of high quality and value-added ingredients, leveraging our ingredients expertise, solutions, and collective experience – together with our customers – we find ingredients solutions that work. GSI is committed to providing outstanding service by being receptive so that we can provide the best solutions for our customers at the same time ensuring the right quality with the right approach.</p>
                    <p className="mt-4">GSI innovation studio supports our value creation partner by providing product and application knowledge no matter where you are base.</p>
                  </Fade>
                </div>
              </Col>
              <Col xs={{ span: 24, order: 1 }} sm={{ span: 8, order: 1 }} md={{ span: 8, order: 2 }} lg={{ span: 8, order: 2 }} >
                <div className="overflow-hidden border-radius">
                  <Fade>
                    <img src={awardWinninggsi} alt="your innovation our solution " className="animation-grow rounded w-100" />
                  </Fade>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="fun-facts bg-blue py-5 p-mob">
          <div className="container mx-auto">
            <Row gutter={[10, 10]} className="mb-3">
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <Fade>
                  <div className="card p-3 p-lg-4">
                    <h6 className="text-outline-red"><span>04</span>+</h6>
                    <p>Manufacturing plant in 4 countries</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <Fade>
                  <div className="card p-3 p-lg-4">
                    <h6 className="text-outline-red"><span>06</span>+</h6>
                    <p>Joint venture companies in 6 countries</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <Fade>
                  <div className="card p-3 p-lg-4">
                    <h6 className="text-outline-red"><span>10</span>+</h6>
                    <p>Business Partners Globally</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <Fade>
                  <div className="card">
                    <Row gutter={[30, 20]} className="mb-3">
                      {/* <Col xs={{ span: 14, order: 1 }} sm={{ span: 14, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} > */}
                      <Col >
                        <div className="details p-3 p-lg-4">
                          <h6 className="text-outline-red"><span>40</span>+</h6>
                          <p>Market to more than 40 countries globally</p>
                        </div>
                      </Col>
                      {/* <Col xs={{ span: 10, order: 2 }} sm={{ span: 10, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} >
                        <div className="overflow-hidden border-radius-right">
                          <img src={marketed} className="right-image animation-grow" alt="Market to more than 40 countries globally" />
                        </div>
                      </Col> */}
                    </Row>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <Fade>
                  <div className="card">
                    <Row gutter={[30, 20]} className="mb-3">
                      {/* <Col xs={{ span: 14, order: 1 }} sm={{ span: 14, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} > */}
                      <Col >
                        <div className="details p-3 p-lg-4">
                          <h6 className="text-outline-red"><span>100</span>+</h6>
                          <p>Employees Globally</p>
                        </div>
                      </Col>
                      {/* <Col xs={{ span: 10, order: 2 }} sm={{ span: 10, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} >
                        <div className="overflow-hidden border-radius-right">
                          <img src={employeesGlobally} className="right-image animation-grow" alt="Employees Globally" />
                        </div>
                      </Col> */}
                    </Row>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="mission-vision py-5 p-mob">
          <div className="container mx-auto py-4">
            <Row gutter={[30, 20]} className="mb-3">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <Fade>
                  <div className="card">
                    <Row gutter={[20, 20]} justify="space-between" align="center">
                      <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 12 }} lg={{ span: 12 }} >
                        <div className="overflow-hidden border-radius-left">
                          <img src={ourMission} className="w-100 animation-grow" alt="our Mission" />
                        </div>
                      </Col>
                      <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }} >
                        <div className="details p-3 p-lg-4">
                          <h5 className="border-left-3 border-danger pl-3 text-blue">Our Mission</h5>
                          <p>To provide innovative solutions using our creativity and insight to make our customer' products sustainable in the global market</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <Fade>
                  <div className="card">
                    <Row gutter={[20, 20]} justify="space-between" align="center">
                      <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 12 }} lg={{ span: 12 }} >
                        <div className="overflow-hidden border-radius-left">
                          <img src={ourVission} className="w-100 animation-grow" alt="Product Performance" />
                        </div>
                      </Col>
                      <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }} >
                        <div className="details p-3 p-lg-4">
                          <h5 className="border-left-3 border-danger pl-3 text-blue">Our Vission</h5>
                          <p>To be a value creation partner in global food supply chain</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="bg-red-gradient py-5 p-mob">
          <div className="container mx-auto">
            <Fade>
              <h2 className="border-left-3 border-blue text-white pl-3 mb-4">Strategic Intent</h2>
              <p className="text-white">GSI’s strategic intent by 2025 is to be a value creation partner in the global food supply chain by differentiating, reengineering, innovative, specialty ingredients by having great people with imagination, committed to being different & bringing revolutionary ideas and solutions of tomorrow to the world.</p>
            </Fade>
          </div>
        </section>

        <section className="pt-5 pb-2 p-mob">
          <div className="container mx-auto text-center">
            <div className="title-section text-center">
              <h2 className="border-left-3 text-center d-inline border-danger text-blue pl-3 mb-4">GSI Success Journey</h2>
            </div>
            <Row gutter={[20, 20]} align="center" >
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }} >
                <Fade>
                  <img src={gsiSuccessJourney} alt="GSI Success Journey" className="w-100" />
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="core-value py-5 bg-blue-gradient p-mob">
          <div className="container mx-auto">
            <Fade>
              <h2 className="border-left-3 border-danger text-white pl-3 mb-4">Core value of Gsi</h2>
            </Fade>
            <Row gutter={[20, 20]} justify="space-between" >
              <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <div className="overflow-hidden border-radius">
                      <img src={integrityImg} alt="Integrity" className="animation-grow" />
                    </div>
                    <h5 className="text-white mt-4">Integrity</h5>
                    <p className="text-white">Integrity and positive thinking</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <div className="overflow-hidden border-radius">
                      <img src={innovationImg} alt="Innovation" className="animation-grow" />
                    </div>
                    <h5 className="text-white mt-4">Innovation</h5>
                    <p className="text-white">we anticipate change and shape it to fit our purposes</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <div className="overflow-hidden border-radius">
                      <img src={continualImprovement} alt="Innovation" className="animation-grow" />
                    </div>
                    <h5 className="text-white mt-4">Continual Improvement</h5>
                    <p className="text-white">We are a learning organization and we improve by analyzing and reviewing our results</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <div className="overflow-hidden border-radius">
                      <img src={positiveAttitude} alt="Positive Attitude" className="animation-grow" />
                    </div>
                    <h5 className="text-white mt-4">Positive Attitude</h5>
                    <p className="text-white">We have ‘can do’ attitude and drive to get the job done</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <div className="overflow-hidden border-radius">
                      <img src={commitmentExcellence} alt="Commitment to Excellence" className="animation-grow" />
                    </div>
                    <h5 className="text-white mt-4">Commitment to Excellence</h5>
                    <p className="text-white">We do what we promised to do with Excellence</p>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="corporate-philosophy pb-5  p-mob">
          <div className="container mx-auto">
            <div className="border border-2 border-top-0 border-danger">
              <div className="title-section text-center pt-5">
                <Fade>
                  <h2 className="border-left-3 text-center d-inline border-danger text-blue pl-3 mb-4">Corporate Philosophy</h2>
                </Fade>
              </div>
              <div className="d-block text-center p-3 p-lg-5">
                <Fade>
                  <img src={corporatePhilosophy} alt="corporate Philosophy" />
                </Fade>
              </div>
            </div>
          </div>
        </section>




        <section className="leadership py-5  p-mob">
          <div className="container mx-auto">
            <Fade>
              <h2 className="border-left-3 border-danger text-blue pl-3 mb-4">GSI Leadership</h2>
              <p className="mb-4">Great leaders adapt to their surrounding environments and empower the team to succeed together</p>
            </Fade>
            <Row align="center">
              <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} >
                <div className="border border-3 border-danger border-bottom-0 p-xs-3 p-3 p-lg-5">
                  <Fade>
                    <h2 className="border-left-3 border-danger text-blue pl-3 mb-4">Dr.Robert Basker <span className="role text-black">Doctor of Philosophy, Ph.D. Chemistry</span> <span className="d-block font-weight-light">CEO & Technical Director</span></h2>
                    <p>Dr Robert Basker provides great leadership on all aspects of the company’s operation by emphasizing on mission and vision</p>
                  </Fade>
                </div>
                <div className="bg-red-gradient p-xs-3 p-3 p-lg-5">
                  <Fade>
                    <h2 className="border-left-3 border-blue text-white pl-3 mb-4">Samantha Basker, <span className="d-block font-weight-light">CFO & Managing Director</span></h2>
                    <p className="text-white">Samantha Basker who’s known for high degree of ability in planning, implementing, managing and running all aspects of a company</p>
                  </Fade>
                </div>
              </Col>
              <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} >
                <Fade>
                  <img src={robertSmanantha} alt="Robert Smanantha" className="w-100" />
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="group-companies py-5 bg-red-gradient  p-mob">
          <div className="container mx-auto py-3">
            <Fade>
              <div className="title-section text-center mb-4">
                <h2 className="border-left-3 text-center d-inline border-danger text-white pl-3 mb-4">GSI Group of Companies</h2>
              </div>
            </Fade>
            <Fade cascade>
              <Row gutter={[20, 20]} align="center">
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }} >
                  <div className="overflow-hidden border-radius">
                    <img src={logo1} alt="Mattwin" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }}>
                  <div className="overflow-hidden border-radius">
                    <img src={logo2} alt="BIS" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }}>
                  <div className="overflow-hidden border-radius">
                    <img src={logo3} alt="Agile Formers" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }}>
                  <div className="overflow-hidden border-radius">
                    <img src={logo4} alt="Dr.well" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }}>
                  <div className="overflow-hidden border-radius">
                    <img src={logo5} alt="3P GSI Ingredients" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }}>
                  <div className="overflow-hidden border-radius">
                    <img src={logo6} alt="3P GSI Ingredients" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }}>
                  <div className="overflow-hidden border-radius">
                    <img src={logo7} alt="Monolith" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }}>
                  <div className="overflow-hidden border-radius">
                    <img src={logo8} alt="Snap Packing" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }} lg={{ span: 4 }}>
                  <div className="overflow-hidden border-radius">
                    <img src={logo9} alt="Ceramic Compound" className="animation-grow card w-100 p-3" />
                  </div>
                </Col>
              </Row>
            </Fade>
          </div>
        </section>


      </React.Fragment >
    )
  }
}
export default withRouter(AboutUs)