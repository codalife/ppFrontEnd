import React from 'react';
import { Component } from 'react';

import Nav from './nav';
import Container from './container';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Container/>
      </div>
    )
  }
}
