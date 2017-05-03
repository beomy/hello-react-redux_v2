import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import Option from './components/Option';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Counter store={this.props.store} />
        <Option store={this.props.store} />
        <Button store={this.props.store} />
      </div>
    );
  }
}

export default App;
