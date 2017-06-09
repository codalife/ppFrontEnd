import React from 'react';
// import { Component } from 'react';

import Locale from './locales';

export default class LocalesGroup extends React.Component {
  render() {

    const listItems = this.props.info.map((q, index) =>
      <Locale data={q} key={index}/>
    );

    return (
      <div>
        <div class="page-header">
          <h1>{this.props.query}  </h1>
        </div>
        {listItems}
      </div>
    );
  }
}
