import React from 'react';
import { withRouter } from 'react-router';
import TitleSection from '../../Components/TitleSection/TitleSection';
import { bgImages } from '../../Util/data';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Fade from 'react-reveal/Fade';
import SolubilityofColour from "./SolubilityofColour";
import NaturalSyntheticColour from "./NaturalSyntheticColour";
import { Helmet } from "react-helmet";

class ColourSolutions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
          <meta charSet="utf-8" />
          <title>GSI - Colour Solutions</title> 
          <meta name="title" content=""/> 
          <meta name="description" content="At Global Specialty Ingredients we offer custom-made solutions for your requirements using our extensive and ever growing ingredients, flavors and flavor systems."/> 
          <meta name="keywords" content="Global Specialty Ingredients ,Colour Solutions,Solubility,natural,synthetic"/> 
          <meta name="og:title" content="GSI - Colour Solutions"/>      
          <meta name="og:description" content="At Global Specialty Ingredients we offer custom-made solutions for your requirements using our extensive and ever growing ingredients, flavors and flavor systems."/> 
          </Helmet>
                <TitleSection sliderImages={bgImages.colourSolutions}  welcomeText="" titleName="Colour Solutions" />
                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">Delight your customers using the most extensive product portfolio of ingredients, flavours and integrated systems for the bakery industry together with our customized innovation and expertise. GSI is ready to share our expertise and support across the entire bakery industry from market intelligence to product development.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Fade>
                                <SolubilityofColour />
                                <NaturalSyntheticColour />
                            </Fade>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        )
    }
}
export default withRouter(ColourSolutions)