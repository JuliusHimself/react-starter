import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-content">
        main
      </main>
      <Footer/>
    </div>
  );
}
