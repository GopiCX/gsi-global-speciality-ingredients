import React from "react";
import { withRouter } from "react-router";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { bgImages } from "../../Util/data";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";
import Antioxidants from "./Antioxidants";
import NaturalAntioxidants from "./NaturalAntioxidants";
import { Helmet } from "react-helmet"; 

class FryingSolution extends React.Component {
  render() {
    return (
      <React.Fragment>
            <Helmet>
    <meta charSet="utf-8" />
    <title>GSI - Frying Solutions</title> 
    <meta name="title" content=""/> 
    <meta name="description" content="At Global Specialty Ingredients will enhance your food's chef-inspired flavors with Our natural, safe, and affordable additives extend the shelf life of your fired food goods."/> 
    <meta name="keywords" content="Global Specialty Ingredients,Frying Solutions,rancimat,antioxidants,Emulsifiers"/> 
    <meta name="og:title" content="GSI - Frying Solutions"/>      
    <meta name="og:description" content="At Global Specialty Ingredients will enhance your food's chef-inspired flavors with Our natural, safe, and affordable additives extend the shelf life of your fired food goods."/> 
           </Helmet>

        <TitleSection
          sliderImages={bgImages.FryingSolution}
          welcomeText=""
          titleName="Frying Solutions"
        />
        <section className="gsi-solutions py-5 p-mob">
          <div className="container mx-auto">
            <Row gutter={[20, 20]} align="center" className="mb-4">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 16 }}
                lg={{ span: 16 }}
              >
                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">
                  Please find our product line.
                </h2>
                <p className="text-left mt-3">
                  "You won't have to be concerned about your fired food goods
                  degrading too quickly! Our natural, safe, and affordable
                  additives extend the shelf life of your fired food products."
                </p>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <Input
                  size="large"
                  placeholder="Search..."
                  prefix={<SearchOutlined />}
                />
              </Col>
            </Row>
            <div className="mt-4">
              <Fade>
                <Antioxidants />
                <NaturalAntioxidants />
              </Fade>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default withRouter(FryingSolution);
