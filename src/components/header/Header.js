import React from 'react';
import logo from '../../assets/img/logo.svg';


export default function Header () {
  return (
    <div className='Header'>
      <button href="#" className="logo">
        <img src={logo} className="App-logo" alt="logo"/>
        <span>Starter</span>
      </button>

      <nav className="Navbar">
        <div className="AppMenu">
          <button>home</button>
          <button>feature</button>
        </div>
        <div className="AccountMenu">
          <button>account</button>
          <button>login</button>
        </div>
      </nav>

    </div>
  )
}
