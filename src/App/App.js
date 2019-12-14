import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <button className="btn btn-danger">Shark Attack</button>
      </div>
    );
  }
}

export default App;
