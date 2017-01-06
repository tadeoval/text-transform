import React, { Component } from 'react';

class TextArea extends Component {

    render() {
        return (
            <textarea onChange={(e) => this.props.onChange(e)} defaultValue={this.props.defaultValue}></textarea>
        );
    }
}

export default TextArea;