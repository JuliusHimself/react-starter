import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg';


export default function Header () {
  return (
    <div className='Header'>
      <button className="Logo-container">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo"/>
        </Link>
      </button>

      <nav className="Navbar">
        <div className="AppMenu">
            <button><Link to="/">home</Link></button>
            <button>feature</button>
        </div>

        <div className="AccountMenu">
            <button>account</button>
            <button><Link to="/Login">login</Link></button>
        </div>
      </nav>

    </div>
  )
}
