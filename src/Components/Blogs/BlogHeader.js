import React from "react";
import Glorich from "../../assets/images/blogs/glorich.png"

class BlogHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="blog-header">
                    <div className="breadcrumb">
                        <a href="/">Home</a> / <a href="/blogs">Blog</a> / Glorich 5050 & Glotella 6373 S
                    </div>
                    <div className="blog-tags">
                        <span className="blog-tag-chip">Glorich</span>
                        <span className="blog-tag-chip">Glotella</span>
                    </div>
                    <h2 className="blog-title">Glorich 5050 & Glotella 6373 S</h2>
                    <div className="blog-featured-image">
                        <img src={Glorich} alt="" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BlogHeader;