import React from 'react';
import { Component } from 'react';

import Nav from './nav';
import Container from './container';
import LocalesGroup from './localesGroup';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [{id: 0}]
    };
    this.addChild = this.addChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
  }
  addChild(action){
    const n = this.state.children.length;
    const currentState = this.state.children.slice();
    currentState.push({id: n});

    this.setState({
      children: currentState
    })
  }
  removeChild(id){
    const currentState = this.state.children.slice();
    const newState = currentState.filter( child => {
      return child.id !== id;
    });

    this.setState({
      children: newState
    })
  }

  render() {
    const n = this.state.children.length;
    const Locales = this.state.children.map( (child, key) =>
      <LocalesGroup key={key} id={key} col={12/n} removeLocale={this.removeChild} />
    )
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
