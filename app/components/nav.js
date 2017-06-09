import React from 'react';
import { Component } from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <a className="navbar-brand">PayPal Test</a>
              </div>
          </div>
      </nav>);
    }
}
