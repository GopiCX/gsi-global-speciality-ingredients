import React from 'react'
import { Helmet } from 'react-helmet';
import Fade from "react-reveal/Fade";
import { Link, withRouter } from "react-router-dom";
import GlorichImg from "../../assets/images/blogs/glorich.png"

class Blogs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>GSI Blogs </title>
                    <meta name="title" content="" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour" />
                    <meta name="og:title" content="" />
                    <meta name="og:description" content="" />
                </Helmet>

                <section className='blogs-container'>
                    <h1 className='text-center'>Blogs</h1>
                    <p className='blogs-desc'>Creating Distinctive Value for our customers is important to us. By doing this, we win their loyalty and retain their business. There are many ways to achieve success in GSI, and it takes a mix of five key pillar.</p>

                    <div className='cutting-edge-solution py-5 p-mob'>
                        <div className="container mx-auto py-lg-3">
                            <div className='card-holder'>
                                <Fade>
                                    <div className="card-box">
                                        <Link to="/glorich-5050">
                                            <div className="details overflow-hidden border-radius">
                                                <img
                                                    src={GlorichImg}
                                                    alt="Process Development & Improvement​"
                                                />
                                                <div className="title">
                                                    <h6>
                                                        Glorich 5050 & Glotella 6373 S
                                                    </h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default withRouter(Blogs);