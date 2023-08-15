import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import BlogSideBar from "./BlogSidebar";
import Glorise from "../../assets/images/blogs/glorise.png";

class Glorise5410 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Glorise 5410 | Blog | GSI Worldwide</title>
                    <meta name="title" content="Glorise 5410" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour" />
                    <meta name="og:title" content="Glorise 5410 | Blog | GSI Worldwide" />
                    <meta name="og:description" content="" />
                </Helmet>

                <div className="blog-main container mx-auto">
                    <Row gutter={[10, 10]}>
                        <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                            <section className="blog-container border-danger ptb-100">
                                <BlogHeader chips={[" Oils & Fats Solutions", "Margarine"]} title="Glorise 5410" featuredImage={Glorise} />

                                <div className="blog-body">
                                    <h3>Dough It Right, It's Worth the Bite</h3>
                                    <p>Adding GLORISE 5410 to your recipe can improve your sponge cake's softness and tenderness while enhancing the batter's aeration. GLORISE 5410 also increases the volume of your cake, ensuring a beautiful and fluffy final product. But that's not all GLORISE 5410 improves the crumb texture of your cake, creating a uniform gas cell size structure that gives your cake a smooth and consistent texture. The cake will stay fresher for longer, reducing the staling effect and extending the shelf life of your baked goods.  So why settle for a subpar sponge cake? Choose GLORISE 5410 for the perfect texture, volume, and freshness every time.</p>
                                    <p>Elevate your culinary masterpieces and enjoy the benefits of increased volume, prolonged freshness, and superior quality with our innovative ingredients. If you have any inquiries, we would be delighted to assist you. Please feel free to reach out to us at <a href="mailto:inquiry@gsi-worldwide.com">inquiry@gsi-worldwide.com</a>.</p>
                                    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/dbDsKwrjMdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </section>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                            <BlogSideBar />
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default Glorise5410;