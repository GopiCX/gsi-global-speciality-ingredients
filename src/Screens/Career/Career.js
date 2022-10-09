import React from 'react';
import { withRouter } from 'react-router';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Row, Col, Collapse } from 'antd';
import Fade from 'react-reveal/Fade';
import TitleSection from '../../Components/TitleSection/TitleSection';
import ExpertPartners from "./ExpertPartners/ExpertPartners";
import experienceImg from "../../assets/images/career/experience.png";
import innovationImg from "../../assets/images/career/innovation.png";
import qualityImg from "../../assets/images/career/quality.png";
import balancedScorecard from "../../assets/images/career/balanced-scorecard.png"
import businessstrategyMapping from "../../assets/images/career/business-strategy-mapping.png"
import keyperformanceIndicator from "../../assets/images/career/key-performance-indicator.png"
import KeyresultAreas from "../../assets/images/career/key-result-areas.png"
import personaldevelopmentPlan from "../../assets/images/career/personal-development-plan.png"
import './Career.scss'

const { Panel } = Collapse;


class Career extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitleSection className="career" welcomeText="WELCOME TO GLOBAL SPECIALTY INGREDIENTS" titleName="Why Work With Us" />

        <section className="key-benefits py-5 p-mob">
          <div className="container mx-auto">
            <Fade>
              <h2 className="border-left-3 border-danger text-blue pl-3 mb-4">Key benefits of working with us</h2>
              <p className="mb-4">Our partners come to us because they are looking for more than a safe pair of hands. They need to know that we’re leaders in our field and that they will be advised, supported and guided at every step.</p>
            </Fade>
            <Row gutter={[25, 20]} justify="space-between" align="left">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <Fade>
                  <img src={experienceImg} alt="Experience" className="w-100" />
                  <div className="bg-light-gray p-3 p-lg-4">
                    <h5 className="text-blue mb-3">Experience</h5>
                    <p>Consumers today want food and beverages that taste great, have a pleasing texture and appearance, and are not only nutritious but also delectable and cost effective. We offer the knowledge, skills, facilities, and infrastructure to assist you in meeting these expectations and maintaining your competitive advantage.</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <Fade>
                  <img src={innovationImg} alt="Innovation" className="w-100" />
                  <div className="bg-light-gray p-3 p-lg-4">
                    <h5 className="text-blue mb-3">Innovation</h5>
                    <p>Our original and innovative culture is fueled by our desire to create fascinating, market-winning products. Our customers regard us as not only a reliable source of high-quality ingredients, but also as a strategic partner who assists them in developing ground-breaking new products to satisfy evolving consumer expectations.</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} >
              <Fade>
                  <img src={qualityImg} alt="Quality" className="w-100" />
                  <div className="bg-light-gray p-3 p-lg-4">
                    <h5 className="text-blue mb-3">Quality</h5>
                    <p>Our major priority has always been to provide high-quality products and services. Our partners have complete faith in our products, so we strive to exceed their expectations.</p>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <ExpertPartners />


        <section className="performance-measurement py-5 p-mob">
          <div className="container mx-auto">
            <Fade>
              <h2 className="border-left-3 border-danger text-blue pl-3 mb-4">Performance Measurement</h2>
              <p className="mb-4">Employee performance measurement is the process of evaluating a person’s work using objective, quantitative criteria. We feel that knowing how our employees are progressing professionally and contributing to our company is vital.</p>
            </Fade>
            <Row gutter={[20, 20]} justify="space-between" align="left">
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <img src={businessstrategyMapping} alt="Business Strategy Mapping" className="mb-2" />
                    <h5 className="text-blue mt-3">Business Strategy Mapping</h5>
                    <p>A business strategy map is a basic diagram that depicts the logical cause-and-effect relationship between strategic goals. It is one of the most important components of the balanced scorecard technique since it is used to swiftly describe how the business creates value.</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <img src={balancedScorecard} alt="Balanced Scorecard" className="mb-2" />
                    <h5 className="text-blue mt-3">Balanced Scorecard</h5>
                    <p>The scorecard prioritises strategy and vision over control. It establishes objectives but expects that people will adopt whatever attitudes and actions are required to achieve those objectives. The goals of the measures are to entice people to support the overarching objective.</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <img src={keyperformanceIndicator} alt="Key Performance Indicator (KPI)" className="mb-2" />
                    <h5 className="text-blue mt-3">Key Performance Indicator (KPI)</h5>
                    <p>The crucial (key) indicators of progress toward a desired objective are known as key performance indicators (KPIs). KPIs serve as a focal point for strategic and operational improvement, providing an analytical foundation for decision-making and assisting in focusing attention on what matters most.</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <img src={KeyresultAreas} alt="Key Result Areas (KRA)" className="mb-2" />
                    <h5 className="text-blue mt-3">Key Result Areas (KRA)</h5>
                    <p>A short list of overall goals that influence how a person executes their job, or general performance and growth goals for an organisation or one of its divisions, are referred to as Key Result Areas (KRAs).</p>
                  </div>
                </Fade>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} >
                <Fade>
                  <div className="details">
                    <img src={personaldevelopmentPlan} alt="Personal Development Plan (PDP)" className="mb-2" />
                    <h5 className="text-blue mt-3">Personal Development Plan (PDP)</h5>
                    <p>A personal development plan (PDP) is an action plan that you can use to establish your personal goals and what you want to accomplish. Your positive and negative characteristics. To achieve your objectives, identify the areas where you need to improve and develop. What you must do in order to meet your objectives</p>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="bg-blue-gradient py-5  p-mob">
          <div className="container mx-auto py-3">
            <Row gutter={[30, 20]} align="center" className="text-white pb-5 ">
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                <Fade>
                  <h2 className="border-left-3 text-white  border-danger pl-3 mb-3">What we offer</h2>
                  <p className="mt-3">GSI offers attractive benefit plans to all of our employees, as well as keeping track of new industry developments and enhancing our programmes as needed.</p>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

        <section className="benefits py-5 align-top  p-mob">
          <div className="container mx-auto py-3">
            <Fade>
              <div className="title-section text-center mb-3">
                <h2 className="text-white  d-inline pl-3 ">General Benefits</h2>
              </div>
              <Row gutter={[30, 20]} align="center" className="text-white pb-3 ">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} >
                  <Collapse
                    // defaultActiveKey={['1']}
                    ghost
                    expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}
                    expandIconPosition="right"
                  >
                    <Panel header="Special Benefits" key="1">
                      <ul>
                        <li>Performance Bonus</li>
                        <li>Attendance Bonus</li>
                        <li>Health and Safety Bonus</li>
                        <li>Festival Incentive Bonus</li>
                        <li>Annual Company Trip</li>
                        <li>Quarterly Employees Birthday Party</li>
                        <li>Rewards and Recognition</li>
                      </ul>
                    </Panel>
                    <Panel header="Allowances" key="2">
                      <p>If eligible employees will be given additional payouts due to specific reasons, on top of the employee’s regular salary.</p>
                      <ul>
                        <li>Petrol allowance.</li>
                        <li>Travel allowance (e.g. Hotel, Food and Parking).</li>
                      </ul>
                    </Panel>
                    <Panel header="Professional Training/Certification" key="3">
                      <p>All employees are offered with professional training/certification programmes as needed.</p>
                      <p>The fundamental goal of professional training or certification is to improve an employee’s abilities so that they can be more productive.</p>
                    </Panel>
                    <Panel header="Insurance / Medical Coverage" key="4">
                      <p>All employees are offered with medical and insurance coverage as benefits.</p>
                      <ul>
                        <li>Medical insurance for outpatient &amp; inpatient</li>
                      </ul>
                    </Panel>
                    <Panel header="Sick leave and hospitalisation leave" key="5">
                      <p>All employees is entitled to sick leave days that are approved by a registered medical practitioner:</p>
                      <ul>
                        <li>14 days every year if they have been employed for less than two years.</li>
                        <li>18 days every year if they have been employed for two years or more but less than five years.</li>
                        <li>22 days every year if they have been employed for five years or more.</li>
                      </ul>
                    </Panel>
                    <Panel header="Maternity leave" key="6">
                      <p>All Employees are allowed to maternity leave for a period of minimum 60 consecutive day</p>
                    </Panel>
                    <Panel header="Annual leave" key="7">
                      <p>All Employees are entitled to paid annual leave of:</p>
                      <ul>
                        <li>8 days for every 12 months if they have been employed for less than 2 years.</li>
                        <li>12 days for every 12 months if they have been employed for more than 2 years, but less than 5 years.</li>
                        <li>16 days for every 12 months if they have been employed for 5 years or more.</li>
                      </ul>
                    </Panel>
                    <Panel header="Public holidays" key="8">
                      <p>All Employees are entitled to paid holidays</p>
                    </Panel>
                  </Collapse>

                </Col>
              </Row>
            </Fade>
          </div>
        </section>

        <section className="pb-3  p-mob">
          <div className="container mx-auto">
            <Row gutter={[30, 20]} align="center" className="text-center">
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                <Fade>
                  <a className="btn bg-red-gradient text-white" href="https://www.linkedin.com/company/global-specialty-ingredients/jobs/" target="_blank" rel="noopener noreferrer">Follow us @ linkedin</a>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>

      </React.Fragment>
    )
  }
}
export default withRouter(Career)