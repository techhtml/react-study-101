import React from 'react';

// css를 불러올 때만 예외
import "./css/nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><a href="#">ORDER</a></li>
          <li><a href="#">CARDS</a></li>
          <li><a href="#">GIFT</a></li>
          <li><a href="#">STORE</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;