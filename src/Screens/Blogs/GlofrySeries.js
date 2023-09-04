import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import BlogSideBar from "./BlogSidebar";
import Glofry from "../../assets/images/blogs/glofry.png";

class GlofrySeries extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GLOFRY Series | Blog | GSI Worldwide</title>
          <meta name="title" content="" />
          <meta name="description" content="" />
          <meta
            name="keywords"
            content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"
          />
          <meta name="og:title" content="" />
          <meta name="og:description" content="" />
        </Helmet>

        <div className="blog-main container mx-auto">
          <Row gutter={[10, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <section className="blog-container border-danger ptb-100">
                <BlogHeader
                  chips={["Frying Solutions", "Anti-oxidants", "Emulsifiers"]}
                  title="GLOFRY Series"
                  featuredImage={Glofry}
                />

                <div className="blog-body">
                  <h3>
                    Improve the quality and shelf life of your fried products.
                  </h3>
                  <p>
                    Our GLOFRY Series is a liquid blend of antioxidants, which
                    eases the production process as the dispersion of
                    antioxidants in the frying oil is much easier and uniform.
                    Unlike the powder type, it needs longer to mix well with the
                    oil. Our GLOFRY Series results in consistent product
                    performance and benefits in cost-saving for production in
                    terms of time and energy. Our GLOFRY Series can keep food
                    delicious by controlling the oxidation process so the
                    products can be fresher for longer.
                  </p>
                  <p>
                    Oil uptake of fried foods is a complex phenomenon which
                    usually happens during the intermediate period between
                    frying and cooling. Oil reduction in deep-fat-fried products
                    can be obtained using our GLOFRY Series, where the oil
                    migration into the structure can be minimised. In addition,
                    our GLOFRY Series significantly decreases foaming during
                    frying.
                  </p>
                  <p>
                    GLOFRY Series is a synthetic liquid antioxidant synergistic
                    blend with antifoam to enhance frying life performance
                    compared to ordinary cooking oil.
                  </p>
                  <p>
                    The key functionalities are:
                    <ul>
                      <li>Increase the frying life of the fried oil</li>
                      <li>Increase the shelf life of fried products</li>
                      <li>Absorb less oil in fried products</li>
                      <li>Slow acceleration of free fatty acids</li>
                      <li>Slow down the rate of rancidity</li>
                      <li>
                        High oxidative stability/ Rancimat value of frying oil
                      </li>
                    </ul>
                  </p>
                  <p>
                    If you want to improve your fried products&#39; quality and
                    shelf life, try our GLOFRY series. We are confident that you
                    will be impressed with the results.
                  </p>
                  <p>
                    If you have any inquiries, we would be delighted to assist
                    you. Please feel free to reach out to us at{" "}
                    <a href="mailto:inquiry@gsi-worldwide.com">
                      inquiry@gsi-worldwide.com
                    </a>
                  </p>
                  <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube-nocookie.com/embed/Ate7c0tuLQU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <BlogSideBar />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default GlofrySeries;
