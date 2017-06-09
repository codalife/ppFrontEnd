import React from 'react';
import { Component } from 'react';

import Nav from './nav';
import Container from './container';
import LocalesGroup from './localesGroup';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [{id: 1}]
    };
    this.addChild = this.addChild.bind(this);
  }
  addChild(action){
    const n = this.state.children.length;
    const currentState = this.state.children.slice();
    currentState.push({id: n});

    this.setState({
      children: currentState
    })
  }

  render() {
    const n = this.state.children.length;
    const Locales = this.state.children.map( (child, key) =>  <LocalesGroup key={key} col={12/n}/> )
    return (
      <div>
        <Nav />
        <Container addLocale = {this.addChild}/>
        <div>
          {Locales}
        </div>
      </div>
    )
  }
}
        // <LocalesGroup query={this.state.query} info={this.state.info}/>
