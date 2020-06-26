import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Align from './align';
import Toggle from './toggle';
import UpAndDown from './upAndDown';
import Pixels from './pixels'
import ColorMe from './colorMe'
import Clock from './clock'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Align</NavLink></li>
            <li><NavLink to="/toggle">Toggle</NavLink></li>
            <li><NavLink to="/upAndDown">Up and Down</NavLink></li>
            <li><NavLink to="/pixels">Pixels</NavLink></li>
            <li><NavLink to="/colorMe">Color Me</NavLink></li>
            <li><NavLink to="/clock">Clock</NavLink></li></ul>
          <div className="content">
            <Route exact path="/" component={Align}/>
            <Route path="/toggle" component={Toggle}/>
            <Route path="/upAndDown" component={UpAndDown}/>
            <Route path="/pixels" component={Pixels}/>
            <Route path="/colorMe" component={ColorMe}/>
            <Route path="/clock" component={Clock}/>
          </div>
        </div>
      </HashRouter>
      </div>
    );
  }
}
