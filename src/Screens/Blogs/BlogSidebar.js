import React from "react";
import RecentBlogOne from "../../assets/images/blogs/glorich.png"

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
                                <span className="blog-tag-chip">Glorich</span>
                                <span className="blog-tag-chip">Glotella</span>
                                <span className="blog-tag-chip">GSI</span>
                                <span className="blog-tag-chip">Blog</span>
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
                                    <div className="post-container">
                                        <div className="post-img">
                                            <img src={RecentBlogOne} alt="" />
                                        </div>
                                        <div className="post-info">
                                            <p>Glorich 5050 & Glotella 6373 S</p>
                                        </div>
                                    </div>
                                    <div className="post-container">
                                        <div className="post-img">
                                            <img src={RecentBlogOne} alt="" />
                                        </div>
                                        <div className="post-info">
                                            <p>Glorich 5050 & Glotella 6373 S</p>
                                        </div>
                                    </div>
                                    <div className="post-container">
                                        <div className="post-img">
                                            <img src={RecentBlogOne} alt="" />
                                        </div>
                                        <div className="post-info">
                                            <p>Glorich 5050 & Glotella 6373 S</p>
                                        </div>
                                    </div>
                                    <div className="post-container">
                                        <div className="post-img">
                                            <img src={RecentBlogOne} alt="" />
                                        </div>
                                        <div className="post-info">
                                            <p>Glorich 5050 & Glotella 6373 S</p>
                                        </div>
                                    </div>
                                </div>
                            }

                            {
                                this.activeTab === "2" && <div className="tab-body">
                                    <div className="post-container">
                                        <div className="post-img">
                                            <img src={RecentBlogOne} alt="" />
                                        </div>
                                        <div className="post-info">
                                            <p>Glorich 5050 & Glotella 6373 S</p>
                                        </div>
                                    </div>
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