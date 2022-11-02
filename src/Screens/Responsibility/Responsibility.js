import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import Fade from 'react-reveal/Fade';
import TitleSection from '../../Components/TitleSection/TitleSection';
import EventGallery from './EventGallery';
import './Responsibility.scss'
import corporateResponsibility from "../../assets/images/responsibility/corporate-responsibility.jpg";
import { bgImages } from '../../Util/data';
class Responsibility extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitleSection sliderImages={bgImages.responsibility} className="responsibility" welcomeText="WELCOME TO GLOBAL SPECIALTY INGREDIENTS" titleName="Responsibility" />

        <section className="who-we-are pattern-1 py-5  p-mob">
          <div className="container mx-auto">
            <Fade>
              <h2 className="border-left-3 border-danger text-blue pl-3 mb-4">Corporate Social responsibility</h2>
            </Fade>
            <Row gutter={[20, 20]} align="center">
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                <div className="pr-lg-4">
                  <Fade>
                    <p className="mt-4">Businessess are increasingly expected to be responsible for their impact on society and the environment in today's world. Corporate social responsibility (CSR) is no longer a well-regarded company practice thus, its has become a consumer demand.</p>
                    <p className="mt-4">GSI identifies the business model and level of responsibility that Businessess should follow in order to have a good impact on the world. The CSR model shows how a flim can be accountable to its employees, stakeholders, the general public, the global and local surroundings.</p>
                    <p className="mt-4">GSI approach has a favorable impact on a business brand in addition to helping the environment and society. People are prioritising firms that focus on social responsibility as they become more socially conscious. Employee morale is also boosted as a result of CSR initiatives, as both employees and employers feel more dedicated in their job.</p>
                  </Fade>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                <div className="overflow-hidden border-radius">
                  <Fade>
                    <img src={corporateResponsibility} alt="corporate Responsibility" className="animation-grow rounded w-100" />
                  </Fade>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <EventGallery />

      </React.Fragment >
    )
  }
}
export default withRouter(Responsibility)