import React, { Component } from 'react';
import TextArea from './TextArea';
import ICAO from '../langs/ICAO.js';
const placeholder = 'test';

class TextConverter extends Component {    

    constructor(props){
        super(props);
        
        this.handleOnChange = this.handleOnChange.bind(this);
        this.transformToICAO = this.transformToICAO.bind(this);

        this.state = {transformedText: this.transformToICAO(placeholder)};
    }

    handleOnChange(evt){
    
        var text = evt.target.value;

        this.setState({transformedText: this.transformToICAO(text)});
    }

    transformToICAO(text){
        return text.toLowerCase().split('').map((item)=>ICAO[item]).join(' ');
    }

    render() {
        return (
            <div className="container">
                <div className="left-column">
                    <p className="App-intro">
                        Fill with text
                    </p>  
                    <TextArea onChange={this.handleOnChange} defaultValue={placeholder}/>
                </div>
                <div className="right-column">
                    <p className="App-intro">
                        <a href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">ICAO</a> text:
                    </p>
                    {this.state.transformedText}
                </div>
            </div>
        );
  }
}

export default TextConverter;