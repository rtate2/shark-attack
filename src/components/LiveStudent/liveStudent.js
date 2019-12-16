import React from 'react';
import studentShape from '../../helpers/propz/studentShape';
import './liveStudent.scss';
// import PropTypes from 'prop-types';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card col-5 studentCard">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{student.firstName + student.lastName}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
