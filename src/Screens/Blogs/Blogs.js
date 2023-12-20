import React from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import GlorichImg5050 from "../../assets/images/blogs/glorich.png";
import Glorich7155 from "../../assets/images/blogs/glorich-7155.png";
import Globalance from "../../assets/images/blogs/globalance-93.png";
import Glorise from "../../assets/images/blogs/glorise.png";
import Glorich6363 from "../../assets/images/blogs/glorich-6363.png";
import Glocoat from "../../assets/images/blogs/glocoat-95-l.png";
import Glofry from "../../assets/images/blogs/glofry.png";
import Glomul from "../../assets/images/blogs/glomul-series.png";
import ACAgent from "../../assets/images/blogs/anti-clouding-agent.png";
import GAgent from "../../assets/images/blogs/glazing-agent.png";
import GlorinaPopcornOil from "../../assets/images/blogs/glorina-popcorn-oil.png";

class Blogs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GSI Blogs </title>
          <meta name="title" content="" />
          <meta name="description" content="" />
          <meta
            name="keywords"
            content="Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"
          />
          <meta name="og:title" content="" />
          <meta name="og:description" content="" />
        </Helmet>

        <section className="blogs-container">
          <h1 className="text-center">Blogs</h1>
          <p className="blogs-desc">
            Delivering unique value to our customers stands as a paramount
            objective. By accomplishing this, we cultivate unwavering loyalty
            and ensure the continuity of their patronage. Success in the realm
            of GSI is multifaceted and relies on a strategic blend of five
            essential pillars.
          </p>

          <div className="cutting-edge-solution py-5 p-mob">
            <div className="container mx-auto py-lg-3">
              <div className="card-holder">
                <Fade>
                  <div className="card-box">
                    <Link to="/glorich-5050">
                      <div className="details overflow-hidden border-radius">
                        <img src={GlorichImg5050} alt="" />
                        <div className="title">
                          <h6 className="uppercase">
                            Glorich 5050 & Glotella 6373 S
                          </h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/glorich-7155">
                      <div className="details overflow-hidden border-radius">
                        <img src={Glorich7155} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Glorich 7155</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/globalance-93">
                      <div className="details overflow-hidden border-radius">
                        <img src={Globalance} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Globalance 93</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/glorise-5410">
                      <div className="details overflow-hidden border-radius">
                        <img src={Glorise} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Glorise 5410</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/glorich-6363">
                      <div className="details overflow-hidden border-radius">
                        <img src={Glorich6363} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Glorich 6363</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/glocoat-95l">
                      <div className="details overflow-hidden border-radius">
                        <img src={Glocoat} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Glocoat 95L</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/glofry-series">
                      <div className="details overflow-hidden border-radius">
                        <img src={Glofry} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Glofry Series</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/glomul-series">
                      <div className="details overflow-hidden border-radius">
                        <img src={Glomul} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Glomul Series</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/anti-clouding-agent">
                      <div className="details overflow-hidden border-radius">
                        <img src={ACAgent} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Anti-Clouding Agent</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/glazing-agent">
                      <div className="details overflow-hidden border-radius">
                        <img src={GAgent} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Glazing Agent</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fade>
                <Fade>
                  <div className="card-box">
                    <Link to="/glorina-popcorn-oil">
                      <div className="details overflow-hidden border-radius">
                        <img src={GlorinaPopcornOil} alt="" />
                        <div className="title">
                          <h6 className="uppercase">Glorina Popcorn Oil</h6>
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
    );
  }
}
export default withRouter(Blogs);
