import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1><a href="#">Startbucks</a></h1>
        <Nav />
        <section className="hero">
          <h2>Good morning</h2>
          <div className="sign-in">
            <a href="#">Sign in</a>
            <a href="#">Join Now</a>
          </div>
        </section>
      </header>
    )
  }
}

// export
export default Header