import { Col, Row } from "antd";
import React from "react"
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import Globalance from "../../assets/images/blogs/globalance-93.png";
import BlogSideBar from "./BlogSidebar";

class Globalance93 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Globalance 93 | Blog | GSI Worldwide</title>
                    <meta name="title" content="Globalance 93" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour" />
                    <meta name="og:title" content="Globalance 93 | Blog | GSI Worldwide" />
                    <meta name="og:description" content="" />
                </Helmet>

                <div className="blog-main container mx-auto">
                    <Row gutter={[10, 10]}>
                        <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                            <section className="blog-container border-danger ptb-100">
                                <BlogHeader chips={["Shelf Life Solutions", "Preservatives"]} title="Globalance 93" featuredImage={Globalance} />

                                <div className="blog-body">
                                    <h3>Long-lasting with preservatives, tastier than before</h3>
                                    <p>GLOBALANCE 93 is a preservative for bread, margarine, cake and parotta that offers several benefits that contribute to maintaining product quality and extending shelf life.</p>
                                    <p>GLOBALANCE 93 helps to extend shelf life. By inhibiting the growth of microorganisms such as bacteria, yeast, and moulds, it helps prevent spoilage and degradation of the product over time.</p>
                                    <p>Effective Against Yeast and Mold Growth, our product exhibits strong antimicrobial properties, specifically targeting yeast and moulds. These microorganisms are common culprits in food and beverage spoilage, and by inhibiting their growth, the product helps maintain the freshness and quality of the items it is used in.</p>
                                    <p>One great advantage of GLOBALANCE 93 is its neutral taste and odour. This means that adding it to food does not significantly alter its original flavour or aroma. This is especially important in preserving the sensory qualities of the products, allowing consumers to enjoy them without any unwanted off-flavours or odours.</p>
                                    <p>By offering these benefits, GLOBALANCE 93 provides a solution for manufacturers and producers who want to enhance their food products' shelf life and quality while maintaining their original taste and aroma.</p>
                                    <p>We are pleased to help you with any questions you may have. Please don't hesitate to contact us at <a href="mailto:inquiry@gsi-worldwide.com">inquiry@gsi-worldwide.com</a>. </p>
                                    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/N4BDBPYrfDc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

export default Globalance93;