import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import BlogSideBar from "./BlogSidebar";
import Glocoat from "../../assets/images/blogs/glocoat-95-l.png";

class Glocoat95L extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GLOCOAT 95L | Blog | GSI Worldwide</title>
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
                  chips={["Bakery Solutions", "Lubrication & Release Agents"]}
                  title="GLOCOAT 95L"
                  featuredImage={Glocoat}
                />

                <div className="blog-body">
                  <p>
                    GLOCOAT 95L is a product that offers several benefits,
                    making it suitable for various applications in the
                    confectionery, bakery and other related industries.
                  </p>
                  <p>
                    GLOCOAT 95L helps prevent the sticking of food products to
                    the surfaces of moulds, pans, cutting and forming devices,
                    slicers, and stamping equipment. This property is crucial
                    for ensuring smooth and efficient production processes. The
                    product enhances the ease of releasing confectionery items,
                    bread, cakes, and other food products from moulds and pans,
                    improving product quality and reducing waste during
                    production. GLOCOAT 95L helps minimise carbon buildup or
                    residues on the equipment used in the confectionery
                    industry, which can enhance the lifespan of the tools and
                    maintain better hygiene standards. GLOCOAT 95L aids in
                    stabilising emulsions, which is essential in producing
                    various food items, especially tin-greasing emulsions,
                    jellies, and sugar confectioneries. Improved emulsion
                    stability can result in better product consistency and shelf
                    life. Overall, GLOCOAT 95L is an anti-sticking, improved
                    release, reduced carbon residues, and emulsion stability are
                    valuable for ensuring smooth and efficient production
                    processes and maintaining high-quality end products.
                  </p>
                  <p>
                    GLOCOAT 95L is a versatile product with various applications
                    in the food industry, particularly in confectionery
                    manufacturing and related processes. Its anti-sticking,
                    improved release, reduced carbon residues, and emulsion
                    stability are valuable for ensuring smooth and efficient
                    production processes and maintaining high-quality end
                    products.
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
                    src="https://www.youtube-nocookie.com/embed/_AjL7r9Ip2c"
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

export default Glocoat95L;
