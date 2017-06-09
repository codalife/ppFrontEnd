import React from 'react';
import { Component } from 'react';

export default class Dedupe extends React.Component {
  render() {
    const langs = this.props.langs.map( (lang, i) => <button key={i}>{lang}</button>)

    return (
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <h1>{this.props.symbol}</h1>
            <div className="caption">
              <h3>List of languages</h3>
              {langs}
            </div>
          </div>
        </div>
    );
  }
}

            // <img src="..." alt="..."/>
