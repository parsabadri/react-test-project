import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import logo from "../../Assets/img/logo.jpeg";
import Profile from "../../Assets/img/profile.jpeg";
import Home from "../../Assets/img/home.jpeg";
import Settings from "../../Assets/img/settings.jpeg";
import LangSwitch from "./LangSwitch";
import {lang} from '../../lang';

class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <img className="logo" alt="logo" src={logo} />
        <Router>
          <NavLink
            className="nav-item"
            activeClassName="nav-active"
            exact
            to="/"
          >
            <img className="nav-icon" alt="home" src={Home} />
            {this.props.engIsChosen === true ? (
              <p>{lang.Navbar.EN.home}</p>
            ) : (
              <p>{lang.Navbar.FR.home}</p>
            )}
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-active"
            exact
            to="/profile"
          >
            <img className="nav-icon" alt="profile" src={Profile} />
            {this.props.engIsChosen === true ? (
              <p> {lang.Navbar.EN.profile} </p>
            ) : (
              <p> {lang.Navbar.FR.profile} </p>
            )}
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-active"
            exact
            to="/settings"
          >
            <img className="nav-icon" alt="settings" src={Settings} />
            {this.props.engIsChosen === true ? (
              <p> {lang.Navbar.EN.settings} </p>
            ) : (
              <p> {lang.Navbar.FR.settings} </p>
            )}
          </NavLink>
        </Router>
        <LangSwitch handleLangChange={()=>this.props.handleLangChange()} />
      </div>
    );
  }
}
export default Navbar;