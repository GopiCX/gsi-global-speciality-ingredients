import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import BlogSideBar from "./BlogSidebar";
import GAgent from "../../assets/images/blogs/glazing-agent.png";

class GlazingAgent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Glazing Agent | Blog | GSI Worldwide</title>
          <meta name="title" content="Glazing Agent" />
          <meta name="description" content="" />
          <meta
            name="keywords"
            content="Confectionary,Bakery,ShelfLife,Oil&Fats,Glazing Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"
          />
          <meta
            name="og:title"
            content="Glazing Agent | Blog | GSI Worldwide"
          />
          <meta name="og:description" content="" />
        </Helmet>

        <div className="blog-main container mx-auto">
          <Row gutter={[10, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <section className="blog-container border-danger ptb-100">
                <BlogHeader
                  chips={[]}
                  title="Glazing Agent"
                  featuredImage={GAgent}
                />

                <div className="blog-body">
                  <h3>Glazing Agent</h3>
                  <p>
                    GLOGLAZE 73 can impart a glossy and shiny finish to
                    chocolate & confectionery products, making them visually
                    appealing to consumers. This glossy appearance can make
                    chocolates more attractive and appetising. It also creates a
                    protective barrier on the chocolate & confectionery surface,
                    which helps prevent moisture absorption and the development
                    of unsightly sugar bloom or fat bloom. This extends the
                    shelf life of the chocolate and maintains its quality.
                    GLOGLAZE 73 can improve the texture of chocolate, making it
                    smoother and more pleasant. This can enhance the overall
                    sensory experience of the product.
                  </p>
                  <p>
                    By providing a protective barrier, preventing moisture
                    absorption, and maintaining texture, GLOGLAZE 73 can
                    contribute to an extended shelf life, reducing the
                    likelihood of spoilage or quality deterioration. It can also
                    enhance the stability of chocolate when subjected to
                    pressure and heat, which is important in various chocolate
                    processing methods, such as molding, coating, or enrobing.
                  </p>
                  <p>
                    These benefits collectively produce high-quality chocolate
                    products that look appealing and maintain their texture,
                    flavour, and overall quality for an extended period.
                  </p>
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

export default GlazingAgent;
