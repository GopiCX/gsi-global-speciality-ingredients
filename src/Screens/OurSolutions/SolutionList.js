import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from 'antd';
import { withRouter } from 'react-router-dom';
import './OurSolutions.scss';


class SolutionList extends Component {
    render() {
        return (
            <React.Fragment>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }} >
                    <Link to={`${this.props.solutionPageLink}`}>
                        <div class="solution-box">
                            <div class="details">
                                <img src={`${this.props.solutionImg}`} alt={`${this.props.solutionTitle}`} />
                                <div class="title">
                                    <h5>{this.props.solutionTitle}</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </React.Fragment >
        );
    }
}

export default withRouter(SolutionList);
