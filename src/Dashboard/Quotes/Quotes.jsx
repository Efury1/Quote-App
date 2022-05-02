import { Component } from "react";
import QuotesText from "../Components/QuotesText";
import QuotesAuthor from "../Components/QuotesAuthor";
import Buttons from "../Components/Buttons";
import "../Quotes/Quotes.css"
import axios from "axios";


class Quotes extends Component {

    state = {
     quote: "“Trying is the first step towards failure.”",
     author: "Homer Simpson",
     quotesData: [],
     color: "rgb(112, 209, 254)",
   };

   fetchQuotes=() => {

   }

   render() {
     return
       <div id="quote-box">
         <QuotesText quote={this.state.quote} color={this.state.color} />
         <QuotesAuthor author={this.state.author} color={this.state.color} />
         <Buttons handleClick={this.handleClick} color={this.state.color} />
       </div>
     );
   }
}

export default Quotes;
