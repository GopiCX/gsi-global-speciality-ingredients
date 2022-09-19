import React from "react";
import { withRouter } from "react-router";
import { Row, Col, Image } from "antd";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slider from "react-slick";
import "./Responsibility.scss";
import selaganHockey from "../../assets/images/responsibility/selagan-hockey/main.jpg"
import recognitionDay from "../../assets/images/responsibility/recognition-day/main.jpg"
import feedingPoor from "../../assets/images/responsibility/feeding-poor/main.jpg"
import chessCompetition from "../../assets/images/responsibility/chess-competition/main.jpg"
import valluvarVizha from "../../assets/images/responsibility/valluvar-vizha/main.jpg"
import SlidingList from "./SlidingList";



const eventGallery = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};
class EventGallery extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <Slider {...eventGallery}>
                    <SlidingList eventMainImg={selaganHockey} eventYear="2019" eventName="Selagan Hockey" />
                    <SlidingList eventMainImg={recognitionDay} eventYear="2018" eventName="2018 recognition day for upsr achievers" />
                    <SlidingList eventMainImg={feedingPoor} eventYear="2018" eventName="2018 feeding the poor, charity event" />
                    <SlidingList eventMainImg={chessCompetition} eventYear="2018" eventName="2018 chess competition" />
                    <SlidingList eventMainImg={valluvarVizha} eventYear="2017" eventName="2017 valluvar vizha" />
                </Slider>

            </React.Fragment>
        );
    }
}
export default withRouter(EventGallery);
