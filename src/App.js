import React, { Component } from 'react';
import Header from './layout/Header';
import About from './layout/About';
import Languages from './layout/Languages';
import Portfolio from './layout/Portfolio';
import Footer from './layout/Footer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Languages />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
