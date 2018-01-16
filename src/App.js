import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Content />
      </div>
    );
  }
}

export default App;
