import React from "react";

class BlogHeader extends React.Component {

    constructor(props) {
        super(props);
        this.chips = props.chips ? props.chips : [];
        this.title = props.title ? props.title : "";
        this.featuredImage = props.featuredImage ? props.featuredImage : "";
    }

    render() {
        return (
            <React.Fragment>
                <div className="blog-header">
                    <div className="breadcrumb">
                        <a href="/">Home</a> / <a href="/blogs">Blog</a> / Glorich 5050 & Glotella 6373 S
                    </div>
                    <div className="blog-tags">
                        {
                            this.chips.map((chip, i) => (
                                <span className="blog-tag-chip" key={i}>{chip}</span>
                            ))
                        }
                    </div>
                    <h2 className="border-left-3 text-blue border-danger pl-3 mb-3 uppercase">{this.title}</h2>
                    <div className="blog-featured-image">
                        <img src={this.featuredImage} alt="" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BlogHeader;