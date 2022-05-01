import React from "react";
import Simpsons from './Simpsons.png';

function QuotesText({ quote, color }) {
  return (

    <div className="quote-text" style={{ color: color }}>
      <img src={Simpsons} alt="Simpsons"/>
      <span id="text">{quote}</span>
    </div>
  );
}

export default QuotesText;
