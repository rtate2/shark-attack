import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SharkTank from '../components/SharkTank/sharkTank';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <button className="btn btn-danger">Shark Attack</button>
          <SharkTank />
      </div>
    );
  }
}

export default App;
