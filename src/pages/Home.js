import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search.js";
import Logo from "./logo.png";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link to="/about">About</Link>
          <Link to="/store">store</Link>
        </div>
        <div className="header__right">
          <Link to="/gmail">gmail</Link>
          <Link to="/images">images</Link>
          <AppsIcon />
          <img src={Logo} className="logo" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__input">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
