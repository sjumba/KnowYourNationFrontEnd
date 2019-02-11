import React, { Component } from "react";
import Mapbuttons from "./Countries";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import  Navbuttons  from "../Fragments/Navbuttons";
class Home extends Component {

  constructor() {
    super();
    this.state = { center: [0, 0] };
  }

  render() {
    let loc_navBarTitle = "KnowYourNation";
    let loc_navbarItems = [false, true, true, false];

    return (
      <div className="home">
        <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
        <NavLink to="/Books">
          <button className="btn btn-success"> Books </button>
        </NavLink>
        <Mapbuttons />
        <Navbuttons/>
      </div>
    );
  }
}

export default Home;
