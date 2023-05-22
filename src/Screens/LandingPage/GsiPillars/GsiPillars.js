import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import GsiPillarsList from "./GsiPillarsList";
import GsiPillarImg from "../../../assets/images/5-pillars-of-gsi.svg";
import "./GsiPillars.scss";

const gsipillarsslidersettings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: "ease-in-out",
  touchThreshold: 100,
};

class GsiPillars extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="gsi-pillars bg-red-gradient p-mob py-5">
          <div className="container mx-auto">
            <Slider {...gsipillarsslidersettings}>
              <div className="list">
                <GsiPillarsList
                  PillarImg={GsiPillarImg}
                  PillarName="Collaboration"
                  ShortDesc="The collaboration pillar is a key part of GSI strategy for fostering collaboration among its employees. It helps promote a collaborative environment where employees are able to work together to achieve common goals."
                />
              </div>
              <div className="list">
                <GsiPillarsList
                  PillarImg={GsiPillarImg}
                  PillarName="Innovation"
                  ShortDesc="The innovation pillar is a key part of our strategy to keep our business at the forefront of the latest trends and technologies. We are constantly exploring new ways to improve our products and services, and to stay ahead of the competition."
                />
              </div>
              <div className="list">
                <GsiPillarsList
                  PillarImg={GsiPillarImg}
                  PillarName="Sustainability"
                  ShortDesc="The sustainability pillar promotes the responsible use of natural resources, promotes environmentally friendly practices, and encourages the development of green technologies."
                />
              </div>
              <div className="list">
                <GsiPillarsList
                  PillarImg={GsiPillarImg}
                  PillarName="Transformation"
                  ShortDesc="The transformation pillar can help businesses transform their operations and achieve their goals. By providing guidance and support, therefor businesses can turn around their performance quickly and achieve success."
                />
              </div>
              <div className="list">
                <GsiPillarsList
                  PillarImg={GsiPillarImg}
                  PillarName="Strategic Intent"
                  ShortDesc="The strategic intent pillar is to achieve a specific and long-term goal. This might include developing a plan to achieve a certain objective, determining the most important factors to consider when making a decision, or setting priorities."
                />
              </div>
            </Slider>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(GsiPillars);
