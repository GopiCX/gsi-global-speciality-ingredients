import React from "react";
import "./Header.scss";
import { Link, NavLink  } from "react-router-dom";
import mainlogo from "../assets/images/gsi-logo.svg";
import functionalIngredients from "../assets/images/Functional-Ingredients-Tailored-to-your-needs.svg"
export let setHeader = false;
export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      openMenu: false
    };
  }
  componentDidMount() {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("main-hearder");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
    //Onscroll sticky Header function ends here
  }

  
  render() {
    return (
      <React.Fragment>
        <div className="main-hearder" id="main-hearder">
          <div className="mx-auto">
            <div className="top-header">
              <div className="logo pr-3">
                <Link to="/">
                  <img src={mainlogo} alt="GSI - Global Specialty Ingredients | Your Innovation Our Solution" />
                </Link>
              </div>
              <div className={this.state.openMenu ? "navigations opened" : "navigations"}>
                <div className="center-header">
                  <ul>
                    <li>
                      <NavLink exact onClick={() => this.setState({ openMenu: false })} activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => this.setState({ openMenu: false })} activeClassName="active" to="/about-us">About</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => this.setState({ openMenu: false })} activeClassName="active" to="/our-solutions">Our Solution</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => this.setState({ openMenu: false })} activeClassName="active" to="/responsibility">Responsibility</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => this.setState({ openMenu: false })} activeClassName="active" to="/events">Events</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => this.setState({ openMenu: false })} activeClassName="active" to="/career">Careers</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => this.setState({ openMenu: false })} activeClassName="active" to="/contact-us">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="functional-ingredient  pl-4">
                <Link to="/">
                  <img src={functionalIngredients} alt="Functional Ingredients Tailored to your needs" />
                </Link>
              </div>
              <div id="hamburger" className={this.state.openMenu ? "menuopened" : ""} onClick={() => this.setState({ openMenu: !this.state.openMenu })} />

            </div>

            {/* bottom header starts */}

            {/* bottom header ends */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
