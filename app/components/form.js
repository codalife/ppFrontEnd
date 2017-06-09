import React from 'react';
import { Component } from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div className="btn-group" role="group" >
        <div className="btn-group" role="group">
          <button className="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Available options { "   " }
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li onClick={(e) => this.props.handleClick('quotationStart')}><a >quotationStart</a></li>
            <li onClick={(e) => this.props.handleClick('quotationEnd')}><a >quotationEnd</a></li>
            <li onClick={(e) => this.props.handleClick('alternateQuotationStart')}><a >alternateQuotationStart</a></li>
            <li onClick={(e) => this.props.handleClick('alternateQuotationEnd')}><a >alternateQuotationEnd</a></li>
          </ul>
        </div>
      </div>
    );
    }
}
