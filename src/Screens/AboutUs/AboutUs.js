import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import TitleSection from '../../Components/TitleSection/TitleSection';
import './AboutUs.scss'
import yourInnovation from "../../assets/images/your-innovation-our-solution.png";
import ourMission from "../../assets/images/your-innovation-our-solution.png";
import ourVission from "../../assets/images/your-innovation-our-solution.png";
import integrityImg from "../../assets/images/03-oil-Fat-solutions.png";

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
                <img src={yourInnovation} alt="your innovation our solution" className="rounded w-100" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="fun-facts bg-blue py-5">
          <div className="container mx-auto">
            <Row gutter={[30, 20]} className="mb-3">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} >
                <div className="card p-4 p-lg-5">
                  <h6 className="text-outline-red"><span>04</span>+</h6>
                  <p>Manufacturing plant in 4 countries</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} >
                <div className="card p-4 p-lg-5">
                  <h6 className="text-outline-red"><span>06</span>+</h6>
                  <p>Joint venture companies in 6 countries</p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} >
                <div className="card p-4 p-lg-5">
                  <h6 className="text-outline-red"><span>10</span>+</h6>
                  <p>Business Partners Globally</p>
                </div>
              </Col>
            </Row>
            <Row gutter={[30, 20]} className="mb-3">
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
                      <img src={ourVission} className="right-image" alt="Product Performance" />
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
                      <img src={ourVission} className="right-image" alt="Product Performance" />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="py-5">
          <div className="container mx-auto">
            <Row gutter={[30, 20]} className="mb-3">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <div className="card d-flex">
                  <div className="image">
                    <img src={ourMission} className="left-image" alt="our Mission" />
                  </div>
                  <div className="details p-3 p-lg-4">
                    <h5 className="border-left-3 border-danger pl-3 text-blue">Our Mission</h5>
                    <p>To provide innovative solutions using our creativity and insight to make our customer' products sustainable in the global market</p>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} >
                <div className="card d-flex">
                  <div className="image">
                    <img src={ourVission} className="left-image" alt="Product Performance" />
                  </div>
                  <div className="details p-3 p-lg-4">
                    <h5 className="border-left-3 border-danger pl-3 text-blue">Our Vission</h5>
                    <p>To be a value creation partner in global food supply chain</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="py-5 bg-blue-gradient">
          <div className="container mx-auto">
            <h2 className="border-left-3 border-danger text-white pl-3">Core value of Gsi</h2>
            <Row gutter={[25, 20]} align="center">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }}>
                <img src={integrityImg} alt="Integrity" className="w-100"/>
                <h5 className="text-white mt-3">Integrity</h5>
                <p className="text-white">Integrity and positive thinking</p>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }}>
                <img src={integrityImg} alt="Integrity" className="w-100"/>
                <h5 className="text-white mt-3">Integrity</h5>
                <p className="text-white">Integrity and positive thinking</p>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
export default withRouter(AboutUs)