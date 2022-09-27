import React from "react";
import { withRouter } from "react-router";
import Slider from "react-slick";
import Award1 from '../../../assets/images/award/awards-1.jpg';
import Award2 from '../../../assets/images/award/awards-2.jpg';
import Award3 from '../../../assets/images/award/awards-3.jpg';
import Award4 from '../../../assets/images/award/awards-4.png';
import Award5 from '../../../assets/images/award/awards-5.jpg';
import Award6 from '../../../assets/images/award/awards-6.jpg';
import Award7 from '../../../assets/images/award/awards-7.jpg';
import Award8 from '../../../assets/images/award/awards-8.jpg';
import Award9 from '../../../assets/images/award/awards-9.jpg';
import Award10 from '../../../assets/images/award/awards-10.jpg';
import Award11 from '../../../assets/images/award/awards-11.jpg';
import Award12 from '../../../assets/images/award/awards-12.jpg';
import Award13 from '../../../assets/images/award/awards-13.png';
import './AwardsAchievements.scss'
import AwardsAchivemenetsList from './AwardsAchivemenetsList'


const awardslidersettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
};
class AwardsAchievements extends React.Component {
    render() {
        return (
            <React.Fragment>

                <section className="awards-achievements bg-blue p-mob">

                    <Slider {...awardslidersettings}>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award1} AwardYear="2021" ShortDesc="SME 100 Awards Fast Movie Companies" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award2} AwardYear="2021" ShortDesc="SME 100 Awards Fast Movie Companies" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award3} AwardYear="2021" ShortDesc="SME 100 Awards Fast Movie Companies" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award4} AwardYear="2019" ShortDesc="Best Food Ingredients Supplier by Frost and Sullivan" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award5} AwardYear="2019" ShortDesc="Best Food Ingredients Supplier by Frost and Sullivan" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award6} AwardYear="2018" ShortDesc="Production & Commercialisation Of Specialty Food Ingredients Award" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award7} AwardYear="2018" ShortDesc="Production & Commercialisation Of Specialty Food Ingredients Award" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award8} AwardYear="2018" ShortDesc="Production & Commercialisation Of Specialty Food Ingredients Award" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award9} AwardYear="2018" ShortDesc="Production & Commercialisation Of Specialty Food Ingredients Award" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award10} AwardYear="2018" ShortDesc="Production & Commercialisation Of Specialty Food Ingredients Award" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award11} AwardYear="2018" ShortDesc="Production & Commercialisation Of Specialty Food Ingredients Award" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award12} AwardYear="2018" ShortDesc="Production & Commercialisation Of Specialty Food Ingredients Award" />
                        </div>
                        <div className="list">
                            <AwardsAchivemenetsList AwardImg={Award13} AwardYear="2018" ShortDesc="STAR OUTSTANDING BUSINESS AWARDS (SOBA)" />
                        </div>
                    </Slider>
                </section>
            </React.Fragment >
        );
    }
}
export default withRouter(AwardsAchievements);
