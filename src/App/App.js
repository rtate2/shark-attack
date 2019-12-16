import React from 'react';
import './App.scss';

import SharkTank from '../components/SharkTank/sharkTank';
import studentData from '../helpers/data/studentData';
import Graveyard from '../components/Graveyard/graveyard';

class App extends React.Component {
  state= {
    students: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-danger shark-button">Shark Attack</button>
        <div className="contain">
          <SharkTank students={this.state.students} />
          <Graveyard />
        </div>
      </div>
    );
  }
}

export default App;
