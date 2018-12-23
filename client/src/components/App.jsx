import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Whac-A-Mole Game!</h1>
      </div>
    );
  }
}
