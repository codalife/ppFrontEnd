import React from 'react';
import axios from 'axios';
import Form from './form'
import Locale from './locales';
import Dedupe from './dedupe';

export default class LocalesGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      query: 'The result will be displayed below',
      dedupe: false
    };
    this.handleClick = this.handleClick.bind(this);
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

      this.state.info.map((q, index) => {
        let lang, symbol;

        for(let key in q){
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
      listItems = this.state.info.map((q, index) =>
        <Locale data={q} key={index}/>
      );
    }

    return (
      <div className={`col-md-${this.props.col}`}>
        <div className="page-header">
          <Form handleClick={this.onChoice}/>
          <span className="close glyphicon glyphicon-remove-circle" onClick={() => this.props.removeLocale(this.props.id)}></span>
          <h1>{this.state.query}</h1>
          <button onClick={this.handleClick} type="button" className="btn btn-primary">Dedupe toggle</button>
        </div>
        {listItems}
      </div>
    );
  }
}
