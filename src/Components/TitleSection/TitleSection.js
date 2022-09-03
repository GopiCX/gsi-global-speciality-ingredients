import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './TitleSection.scss';

class TitleSection extends Component {
    render() {
        return (
            <React.Fragment>
                <section className={`text-center top-banner ${this.props.className}`} >
                    <div className="container mx-auto ">
                        <div className="center-contents w-100">
                            <div className="middle-content">
                                <div className="caption mt-sm-3 mt-lg-5 pt-sm-1 pt-lg-3">
                                    <p className="text-white text-uppercase mb-3 mb-lg-4">{this.props.welcomeText}</p>
                                    <h1 className="text-white mb-3 mb-lg-4">{this.props.titleName}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default withRouter(TitleSection);
