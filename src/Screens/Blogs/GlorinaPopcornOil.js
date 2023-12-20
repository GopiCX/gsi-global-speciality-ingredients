import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import { withRouter } from "react-router";
import BlogSideBar from "./BlogSidebar";
import GlorinaPopcornOilImg from "../../assets/images/blogs/glorina-popcorn-oil.png";

class GlorinaPopcornOil extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Glorina Popcorn Oil | Blog | GSI Worldwide</title>
          <meta name="title" content="Glorina Popcorn Oil" />
          <meta name="description" content="" />
          <meta
            name="keywords"
            content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"
          />
          <meta
            name="og:title"
            content="Glorina Popcorn Oil | Blog | GSI Worldwide"
          />
          <meta name="og:description" content="" />
        </Helmet>
        <div className="blog-main container mx-auto">
          <Row gutter={[10, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <section className="blog-container border-danger ptb-100">
                <BlogHeader
                  chips={["Confectionery Solutions", "Coating"]}
                  title="Glorina Popcorn Oil"
                  featuredImage={GlorinaPopcornOilImg}
                />

                <div className="blog-body">
                  <h3>GLORINA Popcorn Oil</h3>
                  <p>
                    GLORINA Popcorn Oil has been crafted to provide an
                    exceptional popcorn experience that leaves you craving more.
                    It's not just an ordinary popcorn oil; it has a
                    distinguished butter aroma and is rich in antioxidants &
                    vitamins. The hallmark of great popcorn is achieving the
                    perfect popping time from uniquely formulated short-chain
                    oil, thus consistently popping evenly with minimal un-popped
                    kernels. GLORINA Popcorn Oil ensures your popcorn tastes
                    excellent and looks appetising. It gives your popcorn a
                    beautifully even and inviting golden hue, making it as
                    visually appealing as it is delicious. The distinguishing
                    feature of GLORINA Popcorn Oil is its ability to infuse your
                    popcorn with a rich, buttery flavour and aroma. As soon as
                    you open the bag or container, that familiar and delightful
                    scent of buttery goodness will transport you to a world of
                    popcorn perfection. We are pleased to help you with any
                    questions you may have. Please don't hesitate to contact us
                    at inquiry@gsi-worldwide.com.
                  </p>
                  <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube-nocookie.com/embed/xtU4C5NQd9U"
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

export default withRouter(GlorinaPopcornOil);
