import React from 'react';
import Nav from './Nav';
import "./css/header.css";
import Button from './Button';

function greetings() {
  let now = new Date().getHours();
  let greetings = "";

  if(now >= 6 && now <= 12) {
    greetings = "Good morning"
  }
  if(now >= 13 && now <= 18) {
    greetings = "Good afternoon"
  }
  if(now >= 19 && now <= 21) {
    greetings = "Good evening"
  }
  if(now >= 22 && now <= 5) {
    greetings = "Good night"
  }

  return greetings;
}


class HamburgerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" onClick={this.props.onClick}>Menu ON</button>
    )
  }
}

class Layer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // 안보일때
    let layerClassName = "layer-popup";
    // 보일때
    if(this.props.visiblility === true) {
      layerClassName = "layer-popup layer-popup-on"
    }

    return (
      <div className={layerClassName}>
        <Nav />
        <HamburgerButton onClick={this.props.onClick} />
      </div>
    )
  }
}

class LayerNav extends React.Component { 
  // 매개체
  // 보였다 안보였다 => 뭘까?
  // toggle
  // on off (boolean) true : false
  // state (상태)
  constructor() {
    super();

    this.state = {
      visiblility: false
    }

    // 이벤트 걸 때마다 해주시면 되는 거
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      visiblility: !this.state.visiblility
    })
  }

  render() {
    return (
      <div>
        <HamburgerButton onClick={this.toggleVisibility} />
        <Layer visiblility={this.state.visiblility} onClick={this.toggleVisibility}/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    let paragraph = greetings();

    return (
      <header className="header">
        <h1><a href="#">Startbucks</a></h1>
        <Nav />
        <LayerNav />

        <section className="hero">
          <h2>{paragraph}</h2>
          <div className="sign-in">
            <Button text="Sign in" />
            <Button text="Join Now" />
          </div>
        </section>
      </header>
    )
  }
}

// export
export default Header