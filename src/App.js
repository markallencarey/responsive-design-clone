import { useState } from 'react'
import './reset.css'
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <img className='hero-img' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg' alt="img of men's accessories" />
      <header className='header'>
        <img className='logo' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='start-bootstrap logo' />
        <nav className='nav'>
          <p className='nav-item'>SERVICES</p>
          <p className='nav-item'>PORTFOLIO</p>
          <p className='nav-item'>ABOUT</p>
          <p className='nav-item'>TEAM</p>
          <p className='nav-item'>CONTACT</p>
        </nav>
        <button
          onClick={toggleMenu}
          className='mobile-menu-btn'>
          <p className='mobile-menu-txt'>MENU</p>
          <img className='mobile-menu-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/768px-Hamburger_icon_white.svg.png' alt='menu icon' />
        </button>
        <div className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
          <p className='mobile-nav-item'>SERVICES</p>
          <p className='mobile-nav-item'>PORTFOLIO</p>
          <p className='mobile-nav-item'>ABOUT</p>
          <p className='mobile-nav-item'>TEAM</p>
          <p className='mobile-nav-item'>CONTACT</p>
        </div>
      </header>
      <body className='body'>
        <h2 className='welcome'>Welcome To Our Studio!</h2>
        <h2 className='nice-to-meet-you'>IT'S NICE TO MEET YOU</h2>
        <button className='tell-me-more-btn'>TELL ME MORE</button>
      </body>
    </div>
  );
}

export default App;
