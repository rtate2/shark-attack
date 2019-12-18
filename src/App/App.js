import React from 'react';
import './App.scss';

import SharkTank from '../components/SharkTank/sharkTank';
import studentData from '../helpers/data/studentData';
import Graveyard from '../components/Graveyard/graveyard';

class App extends React.Component {
  state= {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });

    const deadStudents = studentData.dearlyBeloved();
    this.setState({ deadStudents });
  }

  sharkAttack = () => {
    const livingStudents = studentData.livingStudents();
    const randomStudent = livingStudents[Math.floor(Math.random() * livingStudents.length)];
    const randomStudentId = randomStudent.id;
    studentData.followTheLight(randomStudentId);
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ deadStudents, livingStudents });
  }

  render() {
    return (
      <div className="App">
        <div className="contain">
          <SharkTank livingStudents={this.state.livingStudents} sharkAttack={this.sharkAttack} />
          <Graveyard deadStudents={this.state.deadStudents} />
        </div>
      </div>
    );
  }
}

export default App;
