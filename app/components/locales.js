import React from 'react';

export default class Locale extends React.Component {
  render() {
    let lang, q;
    const data = this.props.data;

    for(let key in data){
      lang = key;
      q = data[key];
    }

    return (
      <div className="col-md-2 col-sm-3">
        <h3>{lang} <span className="badge">{q}</span></h3>
      </div>
    );
  }
}
