import React from 'react';

import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/liveStudent';
import studentShape from '../../helpers/propz/studentShape';
import studentData from '../../helpers/data/studentData';

import './sharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const students = studentData.livingStudents();
    if (students.length > 0) {
      const { sharkAttack } = this.props;
      e.preventDefault();
      sharkAttack();
    }
  }

  render() {
    const myStudents = this.props.livingStudents;

    const studentCards = myStudents.map((student) => <LiveStudent key={student.id} student={student} />);

    return (  
      <div className="sharkTank">
        <div className="container">
        <button className="col-4 offset-4 btn btn-danger shark-button" onClick={this.sharkAttackEvent}>Shark Attack</button>
        </div>
        <div className="row studentCards offset-2">
        {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
