import React from "react"
import {  Route, Switch,Redirect } from "react-router-dom"
import index from './views/index'
import login from './views/login'
import play from './views/play'
import './assets/css/App.css'
function App() {
  return (
    <div className="App">
      <Switch>
           <Route path="/login" component={login}></Route>
           <Route path="/index" component={index}></Route>
           <Route path="/play/:id" component={play}></Route>
           <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
