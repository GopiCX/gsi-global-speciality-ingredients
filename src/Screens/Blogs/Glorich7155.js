import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../../Components/Blogs/BlogHeader";
import { withRouter } from "react-router";
import Glorich from "../../assets/images/blogs/glorich-7155.png"
import BlogSideBar from "./BlogSidebar";

class Glorich7155 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Glorich 7155 | Blog | GSI Worldwide</title>
                    <meta name="title" content="Glorich 7155" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour" />
                    <meta name="og:title" content="Glorich 7155 | Blog | GSI Worldwide" />
                    <meta name="og:description" content="" />
                </Helmet>
                <div className="blog-main container mx-auto">
                    <Row gutter={[10, 10]}>
                        <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                            <section className="blog-container border-danger ptb-100">
                                <BlogHeader chips={["Confectionery Solutions", "Coating"]} title="Glorich 7155" featuredImage={Glorich} />

                                <div className="blog-body">
                                    <h3>A new way to think about ice cream!</h3>
                                    <p>Ice cream dip coating is a delicious and popular topping used to enhance the flavour and texture of ice cream. It is a hard, glossy, and usually chocolatey shell that forms a protective layer over the ice cream when it comes in contact with cold temperatures.</p>
                                    <p>Ice creams with dip coating are the best to enjoy during the heatwave as the external shell's higher melting point offers a layer of protection to the soft interior. Many consumers thought that ice cream products carried on sticks can be easily dipped into compound chocolate and coated. In fact, to achieve a good coating has led to challenges. Therefore, optimal setting of compound coating is very crucial for the confectionery manufacturers as this affects the rates of solidification, drying and melting of the coating. However, these issues can be solved by using an effective emulsifiers combination, it able to assist manufacturers free from their struggles to achieve cost-effective coating consistency.</p>
                                    <p>Our emulsifiers combination can improve your compound coating acceptability and impart its characteristic properties, such as reduce yield value and plastic viscosity, short crystallization and drying time, no cracking on coating no fat bloom and many more.</p>
                                    <iframe width="100%" height="450" src="https://www.youtube-nocookie.com/embed/G16x-X9YyR0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

export default withRouter(Glorich7155)