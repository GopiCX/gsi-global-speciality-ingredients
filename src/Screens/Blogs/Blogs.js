import React from 'react'
import { Helmet } from 'react-helmet';
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { withRouter } from "react-router"
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
                    <p className='blogs-desc'>Delivering unique value to our customers stands as a paramount objective. By accomplishing this, we cultivate unwavering loyalty and ensure the continuity of their patronage. Success in the realm of GSI is multifaceted and relies on a strategic blend of five essential pillars.</p>

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
                            <div className='card-holder'>
                                <Fade>
                                    <div className="card-box">
                                        <Link to="/glorich-7155">
                                            <div className="details overflow-hidden border-radius">
                                                <img
                                                    src={GlorichImg}
                                                    alt="Process Development & Improvement​"
                                                />
                                                <div className="title">
                                                    <h6>
                                                        Glorich 7155
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