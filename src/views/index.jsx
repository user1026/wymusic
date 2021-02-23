import React, { Component } from "react";
import { Switch, Route, NavLink,Redirect } from "react-router-dom";

import home from "../commponents/index/home";
import music from "../commponents/index/music";
import search from "../commponents/index/search";

import Header from "../commponents/index/header";
export default class index extends Component {
 
  componentDidMount() {
   
  }
  render() {
    return (
      <div className="index">
         <Switch>
            <Route path="/index/home" component={home}></Route>
            <Route path="/index/music" component={music}></Route>
            <Route path="/index/search" component={search}></Route>
            <Redirect to="/index/home"></Redirect>
          </Switch>
        <Header></Header>
      </div>
    );
  }
}
