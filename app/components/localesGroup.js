import React from 'react';
// import { Component } from 'react';

import Locale from './locales';
import Dedupe from './dedupe';

export default class LocalesGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dedupe: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.setState({
      dedupe: this.state.dedupe ? false : true
    });
  }
  render() {
    let listItems;

    if(this.state.dedupe){
      let dedupeSet = {};

      this.props.info.map((q, index) => {
        let lang, symbol;

        for(let key in q){
          // lang = key;
          // symbol = data[key];
          if(dedupeSet.hasOwnProperty(q[key])){
            dedupeSet[q[key]].push(key);
          } else {
            dedupeSet[q[key]] = [key];
          }
        }
      });

      listItems = Object.entries(dedupeSet).map( (symbol, index) =>
        <Dedupe symbol={symbol[0]} langs={symbol[1]} key={index}/>
      );
    } else {
      listItems = this.props.info.map((q, index) =>
        <Locale data={q} key={index}/>
      );
    }

    return (
      <div>
        <div className="page-header">
          <h1>{this.props.query}</h1>
          <button onClick={this.handleClick} type="button" className="btn btn-primary">Dedupe toggle</button>
        </div>
        {listItems}
      </div>
    );
  }
}
