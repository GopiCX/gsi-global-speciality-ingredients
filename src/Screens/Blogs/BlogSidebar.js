import React from "react";
import RecentBlogOne from "../../assets/images/blogs/glorich.png";
import RecentBlogTwo from "../../assets/images/blogs/glorich-7155.png";
import RecentBlogThree from "../../assets/images/blogs/globalance-93.png";
import RecentBlogFour from "../../assets/images/blogs/glorise.png";
import { Link } from "react-router-dom";

export default class BlogSideBar extends React.Component {
    constructor() {
        super()
        this.activeTab = "1";
    }
    tabChange = (activeIndex) => {
        this.activeTab = activeIndex;
        this.forceUpdate();
    }
    render() {
        return (
            <React.Fragment>
                <div className="blog-sidebar">
                    <div className="blog-sidebar__item">
                        <div className="sidebar-tags-container">
                            <h3>Tags</h3>
                            <div className="sidebar-tags">
                                <span className="blog-tag-chip">Confectionery Solutions</span>
                                <span className="blog-tag-chip">Bake stable fillings</span>
                                <span className="blog-tag-chip">Confectionery Solution</span>
                                <span className="blog-tag-chip">Coating</span>
                                <span className="blog-tag-chip">Spreads</span>
                                <span className="blog-tag-chip">Preservatives</span>
                                <span className="blog-tag-chip">Margarine</span>
                                <span className="blog-tag-chip">Shelf Life Solutions</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-sidebar__item p-0">
                        <div className="sidebar-tabs-container">
                            <div className="tabs">
                                <div className={`tab ${this.activeTab === "1" ? "active" : ""}`} onClick={() => this.tabChange("1")}>Recent</div>
                                <div className={`tab ${this.activeTab === "2" ? "active" : ""}`} onClick={() => this.tabChange("2")}>Popular</div>
                            </div>
                            {
                                this.activeTab === "1" && <div className="tab-body">
                                    <Link to="/glorich-5050">
                                        <div className="post-container">
                                            <div className="post-img">
                                                <img src={RecentBlogOne} alt="" />
                                            </div>
                                            <div className="post-info">
                                                <p>Glorich 5050 & Glotella 6373 S</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/glorich-7155">
                                        <div className="post-container">
                                            <div className="post-img">
                                                <img src={RecentBlogTwo} alt="" />
                                            </div>
                                            <div className="post-info">
                                                <p>Glorich 7155</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/globalance-93">
                                        <div className="post-container">
                                            <div className="post-img">
                                                <img src={RecentBlogThree} alt="" />
                                            </div>
                                            <div className="post-info">
                                                <p>Globalance 93</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/glorise-5410">
                                        <div className="post-container">
                                            <div className="post-img">
                                                <img src={RecentBlogFour} alt="" />
                                            </div>
                                            <div className="post-info">
                                                <p>Glorise 5410</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            }

                            {
                                this.activeTab === "2" && <div className="tab-body">
                                    <Link to="/glorich-5050">
                                        <div className="post-container">
                                            <div className="post-img">
                                                <img src={RecentBlogOne} alt="" />
                                            </div>
                                            <div className="post-info">
                                                <p>Glorich 5050 & Glotella 6373 S</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/glorise-5410">
                                        <div className="post-container">
                                            <div className="post-img">
                                                <img src={RecentBlogFour} alt="" />
                                            </div>
                                            <div className="post-info">
                                                <p>Glorise 5410</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="blog-sidebar__item">
                        <div className="sidebar-social-container">
                            <h3>Follow us</h3>
                            <ul className="d-flex p-0 m-0">
                                <li><a href="https://www.facebook.com/globalspecialtyingredients/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="https://www.instagram.com/globalspecialtyingredients/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                <li><a href="https://twitter.com/specialty_m" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="https://www.linkedin.com/company/global-specialty-ingredients/jobs/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}