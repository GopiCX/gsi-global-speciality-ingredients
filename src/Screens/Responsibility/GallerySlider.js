import React from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import './Responsibility.scss';

class GallerySlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <React.Fragment>
                {/* <!--gallery-slider section starts--> */}
                <div className="gallery-slider">
                    {/* <!--Slider Item starts--> */}
                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        arrows={true}
                        fade={true}
                    >
                        {
                            this.props.images && this.props.images.map(image => {
                                return <div className="item">
                                    <img src={image.imagePath} alt="" />
                                </div>
                            })
                        }
                    </Slider>


                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={this.props.images && this.props.images.length}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        className="thumbnailslider"
                    >
                        {
                            this.props.images && this.props.images.map(image => {
                                return <div className="item">
                                    <img src={image.thumbnailImagePath} alt="" />
                                </div>
                            })
                        }
                        
                    </Slider>

                </div>
                {/* <!--gallery-slider section ends--> */}
            </React.Fragment>

        )
    }
}
export default withRouter(GallerySlider)