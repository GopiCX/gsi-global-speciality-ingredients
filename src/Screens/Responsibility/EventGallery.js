import React from "react";
import { withRouter } from "react-router";
import { Row, Col } from "antd";
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "./Responsibility.scss";
import selaganHockey from "../../assets/images/responsibility/selagan-hockey/main.jpg"
import recognitionDay from "../../assets/images/responsibility/recognition-day/main.jpg"
import feedingPoor from "../../assets/images/responsibility/feeding-poor/main.jpg"
import chessCompetition from "../../assets/images/responsibility/chess-competition/main.jpg"
import valluvarVizha from "../../assets/images/responsibility/valluvar-vizha/main.jpg"
import SlidingList from "./SlidingList";
import GallerySlider from "./GallerySlider";
import ModalBox from '../../Components/ModalBox/ModalBox'

import selaganGallery1 from "../../assets/images/responsibility/selagan-hockey/1.jpg";
import selaganGallery2 from "../../assets/images/responsibility/selagan-hockey/2.jpg";
import selaganGallery3 from "../../assets/images/responsibility/selagan-hockey/3.jpg";

import recognitionGallery1 from "../../assets/images/responsibility/recognition-day/1.jpg";
import recognitionGallery2 from "../../assets/images/responsibility/recognition-day/2.jpg";
import recognitionGallery3 from "../../assets/images/responsibility/recognition-day/3.jpg";
import recognitionGallery4 from "../../assets/images/responsibility/recognition-day/4.jpg";
import recognitionGallery5 from "../../assets/images/responsibility/recognition-day/5.jpg";
import recognitionGallery6 from "../../assets/images/responsibility/recognition-day/6.jpg";
import recognitionGallery7 from "../../assets/images/responsibility/recognition-day/7.jpg";
import recognitionGallery8 from "../../assets/images/responsibility/recognition-day/8.jpg";
import recognitionGallery9 from "../../assets/images/responsibility/recognition-day/9.jpg";
import recognitionGallery10 from "../../assets/images/responsibility/recognition-day/10.jpg";
import recognitionGallery11 from "../../assets/images/responsibility/recognition-day/11.jpg";
import recognitionGallery12 from "../../assets/images/responsibility/recognition-day/12.jpg";
import recognitionGallery13 from "../../assets/images/responsibility/recognition-day/13.jpg";

import feedingpoorGallery1 from "../../assets/images/responsibility/feeding-poor/1.jpg";
import feedingpoorGallery2 from "../../assets/images/responsibility/feeding-poor/2.jpg";
import feedingpoorGallery3 from "../../assets/images/responsibility/feeding-poor/3.jpg";
import feedingpoorGallery4 from "../../assets/images/responsibility/feeding-poor/4.jpg";
import feedingpoorGallery5 from "../../assets/images/responsibility/feeding-poor/5.jpg";
import feedingpoorGallery6 from "../../assets/images/responsibility/feeding-poor/6.jpg";
import feedingpoorGallery7 from "../../assets/images/responsibility/feeding-poor/7.jpg";

import chesscompetitionGallery1 from "../../assets/images/responsibility/chess-competition/1.jpg";
import chesscompetitionGallery2 from "../../assets/images/responsibility/chess-competition/2.jpg";
import chesscompetitionGallery3 from "../../assets/images/responsibility/chess-competition/3.jpg";
import chesscompetitionGallery4 from "../../assets/images/responsibility/chess-competition/4.jpg";
import chesscompetitionGallery5 from "../../assets/images/responsibility/chess-competition/5.jpg";
import chesscompetitionGallery6 from "../../assets/images/responsibility/chess-competition/6.jpg";
import chesscompetitionGallery7 from "../../assets/images/responsibility/chess-competition/7.jpg";
import chesscompetitionGallery8 from "../../assets/images/responsibility/chess-competition/8.jpg";
import chesscompetitionGallery9 from "../../assets/images/responsibility/chess-competition/9.jpg";

import valluvarvizhaGallery1 from "../../assets/images/responsibility/valluvar-vizha/1.jpg";
import valluvarvizhaGallery2 from "../../assets/images/responsibility/valluvar-vizha/2.jpg";
import valluvarvizhaGallery3 from "../../assets/images/responsibility/valluvar-vizha/3.jpg";
import valluvarvizhaGallery4 from "../../assets/images/responsibility/valluvar-vizha/4.jpg";
import valluvarvizhaGallery5 from "../../assets/images/responsibility/valluvar-vizha/5.jpg";
import valluvarvizhaGallery6 from "../../assets/images/responsibility/valluvar-vizha/6.jpg";
import valluvarvizhaGallery7 from "../../assets/images/responsibility/valluvar-vizha/7.jpg";
import valluvarvizhaGallery8 from "../../assets/images/responsibility/valluvar-vizha/8.jpg";
import valluvarvizhaGallery9 from "../../assets/images/responsibility/valluvar-vizha/9.jpg";
import valluvarvizhaGallery10 from "../../assets/images/responsibility/valluvar-vizha/10.jpg";

const eventGallery = {
    arrows: true,
    dots: true,
    infinite: false,
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

const selaganGallery = [
    {
        imagePath: [selaganGallery1],
        thumbnailImagePath: [selaganGallery1],
    },
    {
        imagePath: [selaganGallery2],
        thumbnailImagePath: [selaganGallery2],
    },
    {
        imagePath: [selaganGallery3],
        thumbnailImagePath: [selaganGallery3],
    },
]

const recognitionGallery = [
    {
        imagePath: [recognitionGallery1],
        thumbnailImagePath: [recognitionGallery1],
    },
    {
        imagePath: [recognitionGallery2],
        thumbnailImagePath: [recognitionGallery2],
    },
    {
        imagePath: [recognitionGallery3],
        thumbnailImagePath: [recognitionGallery3],
    },
    {
        imagePath: [recognitionGallery4],
        thumbnailImagePath: [recognitionGallery4],
    },
    {
        imagePath: [recognitionGallery5],
        thumbnailImagePath: [recognitionGallery5],
    },
    {
        imagePath: [recognitionGallery6],
        thumbnailImagePath: [recognitionGallery6],
    },
    {
        imagePath: [recognitionGallery7],
        thumbnailImagePath: [recognitionGallery7],
    },
    {
        imagePath: [recognitionGallery8],
        thumbnailImagePath: [recognitionGallery8],
    },
    {
        imagePath: [recognitionGallery9],
        thumbnailImagePath: [recognitionGallery9],
    },
    {
        imagePath: [recognitionGallery10],
        thumbnailImagePath: [recognitionGallery10],
    },
    {
        imagePath: [recognitionGallery11],
        thumbnailImagePath: [recognitionGallery11],
    },
    {
        imagePath: [recognitionGallery12],
        thumbnailImagePath: [recognitionGallery12],
    },
    {
        imagePath: [recognitionGallery13],
        thumbnailImagePath: [recognitionGallery13],
    },
]

const feedingpoorGallery = [
    {
        imagePath: [feedingpoorGallery1],
        thumbnailImagePath: [feedingpoorGallery1],
    },
    {
        imagePath: [feedingpoorGallery2],
        thumbnailImagePath: [feedingpoorGallery2],
    },
    {
        imagePath: [feedingpoorGallery3],
        thumbnailImagePath: [feedingpoorGallery3],
    },
    {
        imagePath: [feedingpoorGallery4],
        thumbnailImagePath: [feedingpoorGallery4],
    },
    {
        imagePath: [feedingpoorGallery5],
        thumbnailImagePath: [feedingpoorGallery5],
    },
    {
        imagePath: [feedingpoorGallery6],
        thumbnailImagePath: [feedingpoorGallery6],
    },
    {
        imagePath: [feedingpoorGallery7],
        thumbnailImagePath: [feedingpoorGallery7],
    },
]

const chesscompetitionGallery = [
    {
        imagePath: [chesscompetitionGallery1],
        thumbnailImagePath: [chesscompetitionGallery1],
    },
    {
        imagePath: [chesscompetitionGallery2],
        thumbnailImagePath: [chesscompetitionGallery2],
    },
    {
        imagePath: [chesscompetitionGallery3],
        thumbnailImagePath: [chesscompetitionGallery3],
    },
    {
        imagePath: [chesscompetitionGallery4],
        thumbnailImagePath: [chesscompetitionGallery4],
    },
    {
        imagePath: [chesscompetitionGallery5],
        thumbnailImagePath: [chesscompetitionGallery5],
    },
    {
        imagePath: [chesscompetitionGallery6],
        thumbnailImagePath: [chesscompetitionGallery6],
    },
    {
        imagePath: [chesscompetitionGallery7],
        thumbnailImagePath: [chesscompetitionGallery7],
    },
    {
        imagePath: [chesscompetitionGallery8],
        thumbnailImagePath: [chesscompetitionGallery8],
    },
    {
        imagePath: [chesscompetitionGallery9],
        thumbnailImagePath: [chesscompetitionGallery9],
    },
]

const valluvarvizhaGallery = [
    {
        imagePath: [valluvarvizhaGallery1],
        thumbnailImagePath: [valluvarvizhaGallery1],
    },
    {
        imagePath: [valluvarvizhaGallery2],
        thumbnailImagePath: [valluvarvizhaGallery2],
    },
    {
        imagePath: [valluvarvizhaGallery3],
        thumbnailImagePath: [valluvarvizhaGallery3],
    },
    {
        imagePath: [valluvarvizhaGallery4],
        thumbnailImagePath: [valluvarvizhaGallery4],
    },
    {
        imagePath: [valluvarvizhaGallery5],
        thumbnailImagePath: [valluvarvizhaGallery5],
    },
    {
        imagePath: [valluvarvizhaGallery6],
        thumbnailImagePath: [valluvarvizhaGallery6],
    },
    {
        imagePath: [valluvarvizhaGallery7],
        thumbnailImagePath: [valluvarvizhaGallery7],
    },
    {
        imagePath: [valluvarvizhaGallery8],
        thumbnailImagePath: [valluvarvizhaGallery8],
    },
    {
        imagePath: [valluvarvizhaGallery9],
        thumbnailImagePath: [valluvarvizhaGallery9],
    },
    {
        imagePath: [valluvarvizhaGallery10],
        thumbnailImagePath: [valluvarvizhaGallery10],
    },
]

class EventGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            selaganGallery: false,
            recognitionGallery: false
        }
    }
    onCancel = () => {
        this.setState({ selaganGallery: false });
        this.setState({ recognitionGallery: false });
        this.setState({ feedingpoorGallery: false });
        this.setState({ chesscompetitionGallery: false });
        this.setState({ valluvarvizhaGallery: false });
    }
    render() {
        return (
            <React.Fragment>
                <section className="event-gallery bg-blue-gradient py-5  p-mob">
                    <div className="container mx-auto py-4">
                        <Row gutter={[30, 20]} align="center" className="text-white pb-4 ">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                                <Fade top>
                                    <h2 className="border-left-3 text-white  border-danger pl-3">GSI CSR Event Gallery</h2>
                                </Fade>
                            </Col>
                        </Row>
                        <Row gutter={[20, 20]} align="center" className="pb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                                <Fade>
                                    <Slider {...eventGallery}>
                                        <div onClick={() => this.setState({ selaganGallery: true })}>
                                            <SlidingList eventMainImg={selaganHockey} eventYear="2019" eventName="Selagan Hockey" />
                                        </div>
                                        <div onClick={() => this.setState({ recognitionGallery: true })}>
                                            <SlidingList eventMainImg={recognitionDay} eventYear="2018" eventName="2018 recognition day for upsr achievers" />
                                        </div>
                                        <div onClick={() => this.setState({ feedingpoorGallery: true })}>
                                            <SlidingList eventMainImg={feedingPoor} eventYear="2018" eventName="2018 feeding the poor, charity event" />
                                        </div>
                                        <div onClick={() => this.setState({ chesscompetitionGallery: true })}>
                                            <SlidingList eventMainImg={chessCompetition} eventYear="2018" eventName="2018 chess competition" />
                                        </div>
                                        <div onClick={() => this.setState({ valluvarvizhaGallery: true })}>
                                            <SlidingList eventMainImg={valluvarVizha} eventYear="2017" eventName="2017 valluvar vizha" />
                                        </div>
                                    </Slider>
                                </Fade>
                            </Col>
                        </Row>
                    </div>
                </section>


                <ModalBox
                    visible={this.state.selaganGallery}
                    width={900}
                    onCancel={this.onCancel}
                    footer={null}
                    destroyOnClose>
                    <GallerySlider images={selaganGallery} />
                </ModalBox>

                <ModalBox
                    visible={this.state.recognitionGallery}
                    width={900}
                    onCancel={this.onCancel}
                    footer={null}
                    destroyOnClose>
                    <GallerySlider images={recognitionGallery} />
                </ModalBox>

                 <ModalBox
                    visible={this.state.feedingpoorGallery}
                    width={900}
                    onCancel={this.onCancel}
                    footer={null}
                    destroyOnClose>
                    <GallerySlider images={feedingpoorGallery} />
                </ModalBox>

                <ModalBox
                    visible={this.state.chesscompetitionGallery}
                    width={900}
                    onCancel={this.onCancel}
                    footer={null}
                    destroyOnClose>
                    <GallerySlider images={chesscompetitionGallery} />
                </ModalBox>

                <ModalBox
                    visible={this.state.valluvarvizhaGallery}
                    width={900}
                    onCancel={this.onCancel}
                    footer={null}
                    destroyOnClose>
                    <GallerySlider images={valluvarvizhaGallery} />
                </ModalBox>


            </React.Fragment>
        );
    }
}
export default withRouter(EventGallery);
