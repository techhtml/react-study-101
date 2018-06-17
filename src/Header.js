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

class Header extends React.Component {
  render() {
    let paragraph = greetings();

    return (
      <header className="header">
        <h1><a href="#">Startbucks</a></h1>
        <Nav />
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