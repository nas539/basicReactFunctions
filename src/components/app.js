import React, { Component } from 'react';
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
        <Align />

        <Toggle 
         text="Toggle Me!"
        />

        <UpAndDown />

        <Pixels />

        <ColorMe />

        <Clock />
       
      </div>
    );
  }
}
