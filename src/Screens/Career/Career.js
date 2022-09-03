import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import TitleSection from '../../Components/TitleSection/TitleSection';
import './Career.scss'
// import yourInnovation from "../../assets/images/your-innovation-our-solution.png";
// import ourMission from "../../assets/images/your-innovation-our-solution.png";
// import ourVission from "../../assets/images/your-innovation-our-solution.png";
// import integrityImg from "../../assets/images/03-oil-Fat-solutions.png";

class Career extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitleSection className="career" welcomeText="Welcome to Global peciality Ingredients" titleName="Career" />

      </React.Fragment>
    )
  }
}
export default withRouter(Career)