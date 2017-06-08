import React from 'react';
import { Component } from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-left">
              <img className="img-responsive" alt="Brand" src="app/assets/paypal.png"></img>
            </a>
          </div>
        </div>
      </nav>);
    }
}
