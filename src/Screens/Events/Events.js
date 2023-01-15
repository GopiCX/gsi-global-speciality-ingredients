import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import TitleSection from '../../Components/TitleSection/TitleSection';
import Fade from 'react-reveal/Fade';
import './Events.scss';
import EventsList from './EventsList';
import { bgImages } from '../../Util/data';
import { Helmet } from "react-helmet";

class Events extends React.Component {
    render() {
        return (
            <React.Fragment>
                  <Helmet>
          <meta charSet="utf-8" />
          <title>GSI Events | Local & International presence </title> 
          <meta name="title" content=""/> 
          <meta name="description" content="GSI’s active participation in exhibitions, trade shows, commercial events, conferences, and economic forums drop your contact details we will get back to assist your value-added Ingredients in your consumer industry"/> 
          <meta name="keywords" content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"/> 
          <meta name="og:title" content="Global Specialty Ingredients |participation in Exhibitions and Trade Shows "/>      
          <meta name="og:description" content="Global Specialty Ingredients Journey in various local and International meetups"/> 
              </Helmet>
                <TitleSection sliderImages={bgImages.events} className="events" welcomeText="" titleName="Events" />

                <section className="gsi-solutions py-5  p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                                <h2 className="border-left-3 border-danger text-blue pl-3 mb-4">Exhibitions and Trade Shows</h2>
                                <p className="mt-3">GSI’s active participation in exhibitions, trade shows, commercial events, conferences, and economic forums are all excellent opportunities to meet customers and conduct business.</p>
                            </Col>
                        </Row>

                    </div>
                </section>

                <section className="gsi-participation bg-blue-gradient py-5 p-mob">
                    <div className="container mx-auto">
                        <div className="title-section text-center pb-4">
                            <h2 className="border-left-3 text-center d-inline border-danger text-white pl-3 mb-4">GSI Participation</h2>
                        </div>
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <EventsList />
                        </Row>

                    </div>
                </section>


            </React.Fragment >
        )
    }
}
export default withRouter(Events)