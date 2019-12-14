import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/liveStudent';

import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const myStudents = this.props.students;

    const studentCards = myStudents.map((student) => <LiveStudent key={student.id} student={student} />);
    return (
      <div className="sharkTank row">
        {studentCards}
      </div>
    );
  }
}

export default SharkTank;