import React from 'react';
import './App.scss';

import SharkTank from '../components/SharkTank/sharkTank';
import studentData from '../helpers/data/studentData';

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
          <button className="btn btn-danger">Shark Attack</button>
          <SharkTank students={this.state.students} />
      </div>
    );
  }
}

export default App;
