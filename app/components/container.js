import React from 'react';

import Form from './form';

const imageStyle = {
  width: "100%",
  height: "350px",
  backgroundImage: "url(app/assets/background.jpg)"
};

export default function Container(props) {
    return (
      <header className="half">
        <div className="fill" style={imageStyle}></div>

        <div className="carousel-caption">
          <h2>Choose deliminator</h2>
          <br/>
          <button className="btn-danger" onClick={props.addLocale}>Add Locale</button>
        </div>
      </header>
    );
}
