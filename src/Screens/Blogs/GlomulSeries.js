import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import BlogSideBar from "./BlogSidebar";
import Glomul from "../../assets/images/blogs/glomul-series.png";

class GlomulSeries extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GLOMUL SERIES | Blog | GSI Worldwide</title>
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
                  chips={[
                    "Bakery Solutions",
                    "Bread & Roll Pastry",
                    "Cake",
                    "Biscuits, cookies & crackers",
                  ]}
                  title="GLOMUL SERIES"
                  featuredImage={Glomul}
                />

                <div className="blog-body">
                  <h3>Dough It Right, It&#39;s Worth the Bite</h3>
                  <p>
                    GSI Bakery Solutions offers a range of products designed to
                    improve the quality and texture of your baked goods, whether
                    baking white pan bread, sweet buns or frozen dough pastries.
                    GSI Bakery Solutions has a product to suit your needs with
                    benefits like shock tolerance, improved gas retention and
                    longer shelf life. GSI Bakery Solutions products help you
                    achieve the perfect texture volume and freshness in your
                    baked goods products like GLOMUL DS8020, GLOMUL MGD 95 and
                    GLOMUL SSL 208 that offer dough conditioning viscosity
                    control reducing shortening usage and provide fine crumb
                    structure and anti- stealing-properties. Elevate Your Baked
                    Goods to New Heights with our GLOMUL SERIES. In baking,
                    achieving perfection is an art; GLOMUL SERIES is an
                    ingredient to crafting bread, buns, and other bakery
                    delights. As a premium dough strengthener and crumb
                    softener, GLOMUL SERIES redefines what is possible in bakery
                    craftsmanship. Let us see how a large- scale baker uses GSI
                    products to achieve the perfect dough. With GSI Bakery
                    Solutions, the dough is more robust and more tolerant to
                    shock resulting in better gas retention and greater bread
                    volume. The result is a beautiful crispy crust and a soft,
                    delicious interior and with the help of Bakery
                    Solutions&#39; anti-stailing properties, your baked goods
                    will stay fresh and tasty for longer, so why settle for
                    ordinary baked goods when you can achieve greatness with
                    global product range try them today and taste the difference
                    for yourself.
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
                    src="https://www.youtube-nocookie.com/embed/bRrHZVrvlBA"
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

export default GlomulSeries;
