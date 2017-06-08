import React from 'react';
import { Component } from 'react';

import Form from './form';

export default class Container extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Choose deliminator!</h1>
        <Form/>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    );
    }
}
