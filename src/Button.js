import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    alert("hello");
  }
  render() {
    return (
      <a href="#" className="btn" onClick={this.onClick}>{this.props.text}</a>
    )
  }
}

export default Button;