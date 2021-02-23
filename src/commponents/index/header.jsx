import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="top">
          <p>
            <img src={require("../../assets/svg/wy.svg").default} alt="#" />
            <span>网易云音乐</span>
          </p>
          <button>下载APP</button>
        </div>
       
         
          <div className="main">
        <NavLink to="/index/home" activeClassName="select">
          推荐音乐
        </NavLink>
        <NavLink to="/index/music" activeClassName="select">
          热歌榜
        </NavLink>
        <NavLink to="/index/search" activeClassName="select">
          搜索
        </NavLink>
        </div>
      </div>
    );
  }
}
