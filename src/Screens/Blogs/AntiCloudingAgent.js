import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import BlogSideBar from "./BlogSidebar";
import ACAgent from "../../assets/images/blogs/anti-clouding-agent.png";

class AntiCloudingAgent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Anti-Clouding Agent | Blog | GSI Worldwide</title>
          <meta name="title" content="Anti-Clouding Agent" />
          <meta name="description" content="" />
          <meta
            name="keywords"
            content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"
          />
          <meta
            name="og:title"
            content="Anti-Clouding Agent | Blog | GSI Worldwide"
          />
          <meta name="og:description" content="" />
        </Helmet>

        <div className="blog-main container mx-auto">
          <Row gutter={[10, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <section className="blog-container border-danger ptb-100">
                <BlogHeader
                  chips={[]}
                  title="Anti-Clouding Agent"
                  featuredImage={ACAgent}
                />

                <div className="blog-body">
                  <h3>Pure Perfection in Every Pour!</h3>
                  <p>
                    Our anti-clouding agent is suitable for RBD Palm Olein and
                    blended vegetable oil. It is a product designed to improve
                    the stability and performance of cooking oils. There are
                    several advantages to your cooking oil production. Our
                    anti-clouding agent delays crystal formation: This suggests
                    that our anti-clouding agent helps prevent or delay the
                    formation of crystals in the cooking oil, ensuring that the
                    food cooked with the oil retains its intended taste and
                    aroma. The uniqueness of our anti-clouding agent shows a
                    reduction in solid fat content and cloud point of the oil
                    that can be beneficial for ensuring that the oil remains
                    clear and liquid at specific temperatures.
                  </p>
                  <h3>Primary Applications :</h3>
                  <ul>
                    <li>Cooking oils</li>
                    <li>Salad oils</li>
                  </ul>
                  <h3>Key Benefits :</h3>
                  <ul>
                    <li>Crystallization inhibitor</li>
                    <li>Prevent clouding</li>
                    <li>Delay crystallization formation</li>
                    <li>Does not increase peroxide value</li>
                    <li>No off-flavor release</li>
                    <li>Reduced cloud point & solid fat content</li>
                    <li>No colour reversion during storage and frying</li>
                  </ul>
                  <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube-nocookie.com/embed/iXdqw5rQKYI"
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

export default AntiCloudingAgent;
