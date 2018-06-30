import React, { Component } from 'react';
import "./css/menu.css";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <a href="#" className="menu-item">
        <figure>
          <div className="thumb">
            <img src={this.props.menuInfo.thumb} />
          </div>
          <figcaption>{this.props.menuInfo.name}</figcaption>
        </figure>
      </a>
    )
  }
}

export default MenuItem;