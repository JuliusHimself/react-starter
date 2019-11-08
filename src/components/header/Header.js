import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

  }

  render() {
    return (
      <div className="Header">
        <AppBar position="static">
            <Toolbar>
              <button className="Logo-container">
                <Link to="/">
                  <img src={logo} className="App-logo" alt="logo"/>
                </Link>
              </button>

              <IconButton edge="start" className="menuButton" aria-label="menu">
                <MenuIcon/>
              </IconButton>
              <nav className="Navbar">
                <div className="AppMenu">
                  <Button><Link to="/">home</Link></Button>
                  <Button>feature</Button>
                </div>
                <div className="AccountMenu">
                  <Button>account</Button>
                  <Button><Link to="/Login">login</Link></Button>
                </div>
              </nav>
            </Toolbar>
        </AppBar>
      </div>
    )
  }


}

export default Header;
