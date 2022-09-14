import React from "react";
import { withRouter } from "react-router";
import "./Responsibility.scss";
import pointerIcon from "../../assets/images/responsibility/pointer-icon.svg"

class SlidingList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="item">
                    <div className="details text-center text-white">
                        <div className="image overflow-hidden border-radius">
                            <img src={`${this.props.eventMainImg}`} alt={`${this.props.eventName}`} className="animation-grow" />
                        </div>
                        <div className="desc">
                            <img src={pointerIcon} className="pointer-icon" alt={`${this.props.eventName}`} />
                            <h3 className="text-white">{this.props.eventYear}</h3>
                            <p>{this.props.eventName}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}
export default withRouter(SlidingList);