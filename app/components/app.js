import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import Nav from './nav';
import Container from './container';
import LocalesGroup from './localesGroup';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {info: [], query: 'The result will be displayed below'};
    this.onChoice = this.onChoice.bind(this);
  }
  onChoice(query){
    const self = this;
    axios.post('http://localhost:3000/', {query: query})
      .then(response => {
        self.setState({
          info: response.data,
          query: query
        })
      })
  }
  render() {
    return (
      <div>
        <Nav/>
        <Container handleClick={this.onChoice}/>
        <LocalesGroup query={this.state.query} info={this.state.info}/>
      </div>
    )
  }
}
