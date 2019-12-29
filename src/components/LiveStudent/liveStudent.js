import React from 'react';
import studentShape from '../../helpers/propz/studentShape';
import './liveStudent.scss';
// import PropTypes from 'prop-types';

class LiveStudent extends React.Component {
  static propTypes = {
    livingStudents: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="livingStudent">
        <p className="first1 text-white m-0">{student.firstName}</p>
        <p className="last1 text-white m-0">{student.lastName}</p>
        <img className="image scuba mb-5" src="https://myrealdomain.com/images/cartoon-scuba-divers-1.png" alt="Scuba Diver" />
      </div>
    );
  }
}

export default LiveStudent;
