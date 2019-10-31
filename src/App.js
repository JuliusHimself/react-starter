import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './views/Home/Home';
import Login from './views/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Header />
          <main className="App-content">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </main>
        <Footer/>
        </Router>
      </div>
    );
  }
}

export default App
