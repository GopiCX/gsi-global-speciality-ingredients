import React from "react";

export default class BlogSideBar extends React.Component {
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
                                <div className="tab active">Recent</div>
                                <div className="tab">Popular</div>
                            </div>
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