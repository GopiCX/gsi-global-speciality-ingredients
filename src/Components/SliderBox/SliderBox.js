import React from 'react';
import Slider from "react-slick";
import { Row, Col } from 'antd';



const bakeStableGallery = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
};

class SliderBox extends React.Component {
    render() {
        return (
            <>
                <Slider {...bakeStableGallery} className="border-radius-left">
                    {this.props.solutionImages.map((image, i) => (
                        <div className="list" key={i}>
                            <img src={image} alt="" />
                        </div>
                    ))}
                </Slider>
            </>
        )
    }
}
export default SliderBox