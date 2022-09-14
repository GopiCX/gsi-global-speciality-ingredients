import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import TitleSection from '../../Components/TitleSection/TitleSection';
import './AboutUs.scss'
import awardWinninggsi from "../../assets/images/about/award-winning-gsi.jpg";
import marketed from "../../assets/images/about/marketed.png";
import employeesGlobally from "../../assets/images/about/employees-globally.png";
import bossMam from "../../assets/images/about/boss-mam.webp";
import ourMission from "../../assets/images/about/our-mission.png";
import ourVission from "../../assets/images/about/our-vision.png";
import integrityImg from "../../assets/images/about/integrity.png";
import innovationImg from "../../assets/images/about/innovation.png";
import continualImprovement from "../../assets/images/about/continual-improvement.png";
import positiveAttitude from "../../assets/images/about/positive-attitude.png"
import corporatePhilosophy from "../../assets/images/about/corporate-philosophy.svg"
import robertSmanantha from "../../assets/images/about/robert-samantha.png"
// group-companies
import logo1 from "../../assets/images/group-companies/logo-1.png";
import logo2 from "../../assets/images/group-companies/logo-2.png";
import logo3 from "../../assets/images/group-companies/logo-3.png";
import logo4 from "../../assets/images/group-companies/logo-4.png";
import logo5 from "../../assets/images/group-companies/logo-5.png";
import logo6 from "../../assets/images/group-companies/logo-6.png";
class AboutUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitleSection className="aboutus" welcomeText="Welcome to Global peciality Ingredients" titleName="Who We are" />

        <section className="who-we-are py-5">
          <div className="container mx-auto">
            <h1 class="text-blue">GS<span class="text-red">I</span> was founded in <span class="text-red">2005</span> with a strong focus on product reliability and sustainability for food and non-food industries.</h1>
            <Row gutter={[20, 20]} align="center">
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                <div class="pr-lg-4">
                  <p class="mt-4">GSI is a leading global ingredients solutions company manufactured, and supplier of value-added Functional Ingredients, <span class="text-red">TAILORED</span> <span class="text-blue">TO YOUR NEEDS</span>, we offer an extensive range of natural food ingredients, functional food ingredients, specialty ingredients, ingredients through products, and consumer’s products like vegetable oils and fats, baking, beverages, snacks, meat processing, confectionery, dairy, biodiesel, oleochemical, and personal care.</p>
                  <p class="mt-4">The cornerstone of our business is our profound knowledge of specialty ingredients which we tailored according to manufacturers and industries requirements, locally and abroad. GSI developed innovative specialty ingredients whereby our customers can count on us for a reliable supply of high quality and value-added ingredients, leveraging our ingredients expertise, solutions, and collective experience – together with our customers – we find ingredients solutions that work. GSI is committed to providing outstanding service by being receptive so that we can provide the best solutions for our customers at the same time ensuring the right quality with the right approach.</p>
                  <p class="mt-4">GSI innovation studio supports our value creation partner by providing product and application knowledge no matter where you are base.</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <div className="overflow-hidden border-radius">
                  <img src={awardWinninggsi} alt="your innovation our solution " className="animation-grow rounded w-100" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="fun-facts bg-blue py-5">
          <div className="container mx-auto">
            <Row gutter={[30, 20]} className="mb-3">
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <div className="card p-3 p-lg-5">
                  <h6 className="text-outline-red"><span>04</span>+</h6>
                  <p>Manufacturing plant in 4 countries</p>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <div className="card p-3 p-lg-5">
                  <h6 className="text-outline-red"><span>06</span>+</h6>
                  <p>Joint venture companies in 6 countries</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <div className="card p-3 p-lg-5">
                  <h6 className="text-outline-red"><span>10</span>+</h6>
                  <p>Business Partners Globally</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <div className="card">
                  <Row gutter={[30, 20]} className="mb-3">
                    <Col xs={{ span: 24, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} >
                      <div className="details p-3 p-lg-4">
                        <h6 className="text-outline-red"><span>40</span>+</h6>
                        <p>Market to more than 40 countries globally</p>
                      </div>
                    </Col>
                    <Col xs={{ span: 24, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} >
                      <div className="overflow-hidden border-radius-right">
                        <img src={marketed} className="right-image animation-grow" alt="Market to more than 40 countries globally" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <div className="card">
                  <Row gutter={[30, 20]} className="mb-3">
                    <Col xs={{ span: 24, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} >

                      <div className="details p-3 p-lg-4">
                        <h6 className="text-outline-red"><span>100</span>+</h6>
                        <p>Employees Globally</p>
                      </div>
                    </Col>
                    <Col xs={{ span: 24, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} >
                      <div className="overflow-hidden border-radius-right">
                        <img src={employeesGlobally} className="right-image animation-grow" alt="Employees Globally" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="mission-vision py-5">
          <div className="container mx-auto py-4">
            <Row gutter={[30, 20]} className="mb-3">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <div className="card">
                  <Row gutter={[20, 20]} justify="space-between" align="center">
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                      <div className="overflow-hidden border-radius-left">
                        <img src={ourMission} className="w-100 animation-grow" alt="our Mission" />
                      </div>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                      <div className="details p-3 p-lg-4">
                        <h5 className="border-left-3 border-danger pl-3 text-blue">Our Mission</h5>
                        <p>To provide innovative solutions using our creativity and insight to make our customer' products sustainable in the global market</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <div className="card">
                  <Row gutter={[20, 20]} justify="space-between" align="center">
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                      <div className="overflow-hidden border-radius-left">
                        <img src={ourVission} className="w-100 animation-grow" alt="Product Performance" />
                      </div>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                      <div className="details p-3 p-lg-4">
                        <h5 className="border-left-3 border-danger pl-3 text-blue">Our Vission</h5>
                        <p>To be a value creation partner in global food supply chain</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="core-value py-5 bg-blue-gradient">
          <div className="container mx-auto">
            <h2 className="border-left-3 border-danger text-white pl-3 mb-4">Core value of Gsi</h2>
            <Row gutter={[20, 20]} justify="space-between" align="center">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <div className="details">
                  <div className="overflow-hidden border-radius">
                    <img src={integrityImg} alt="Integrity" className="w-100 animation-grow" />
                  </div>
                  <h5 className="text-white mt-4">Integrity</h5>
                  <p className="text-white">Integrity and positive thinking</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <div className="details">
                  <div className="overflow-hidden border-radius">
                    <img src={innovationImg} alt="Innovation" className="w-100 animation-grow" />
                  </div>
                  <h5 className="text-white mt-4">Innovation</h5>
                  <p className="text-white">we anticipate change and shape it to fit our purposes</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <div className="details">
                  <div className="overflow-hidden border-radius">
                    <img src={continualImprovement} alt="Innovation" className="w-100 animation-grow" />
                  </div>
                  <h5 className="text-white mt-4">Continual Improvement</h5>
                  <p className="text-white">We are a learning organization and we improve by analyzing and reviewing our results</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <div className="details">
                  <div className="overflow-hidden border-radius">
                    <img src={positiveAttitude} alt="Positive Attitude" className="w-100 animation-grow" />
                  </div>
                  <h5 className="text-white mt-4">Positive Attitude</h5>
                  <p className="text-white">We have ‘can do’ attitude and drive to get the job done</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <div className="details">
                  <div className="overflow-hidden border-radius">
                    <img src={integrityImg} alt="Commitment to Excellence" className="w-100 animation-grow" />
                  </div>
                  <h5 className="text-white mt-4">Commitment to Excellence</h5>
                  <p className="text-white">We do what we promised to do with Excellence</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="corporate-philosophy pb-5">
          <div className="container mx-auto">
            <div className="border border-2 border-top-0 border-danger">
              <div className="title-section text-center pt-5">
                <h2 className="border-left-3 text-center d-inline border-danger text-blue pl-3 mb-4">Corporate Philosophy</h2>
              </div>
              <div className="d-block text-center p-3 p-lg-5">
                <img src={corporatePhilosophy} alt="corporate Philosophy" />
              </div>
            </div>
          </div>
        </section>


        <section className="leadership py-5">
          <div className="container mx-auto">
            <h2 className="border-left-3 border-danger text-blue pl-3 mb-4">GSI Leadership</h2>
            <p className="mb-4">Great leaders adapt to their surrounding environments and empower the team to succeed together</p>

            <Row align="center">
              <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} >
                <div class="border border-3 border-danger border-bottom-0 p-xs-3 p-5">
                  <h2 className="border-left-3 border-danger text-blue pl-3 mb-4">Dr.Robert Basker <span className="role text-black">Doctory of Philosopy, Ph.D. Chemistry</span> <span className="d-block font-weight-light">CEO & Technical Director</span></h2>
                  <p>Dr Robert Basker provides great leadership on all aspects of the company’s operation by emphasizing on mission and vision</p>
                </div>
                <div class="bg-red-gradient p-xs-3 p-5">
                  <h2 className="border-left-3 border-blue text-white pl-3 mb-4">Samantha Basker, <span className="d-block font-weight-light">CFO & Managing Director</span></h2>
                  <p className="text-white">Samantha Basker who’s known for high degree of ability in planning, implementing, managing and running all aspects of a company</p>
                </div>
              </Col>
              <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} >
                <img src={robertSmanantha} alt="Robert Smanantha" className="w-100" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="group-companies py-5 bg-red-gradient">
          <div className="container mx-auto py-3">
            <div className="title-section text-center mb-4">
              <h2 className="border-left-3 text-center d-inline border-danger text-white pl-3 mb-4">GSI Group of Companies</h2>
            </div>
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
            </Row>
          </div>
        </section>


      </React.Fragment >
    )
  }
}
export default withRouter(AboutUs)