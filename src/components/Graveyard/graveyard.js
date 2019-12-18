import React from 'react';
import './graveyard.scss';

import studentShape from '../../helpers/propz/studentShape';
import Gravestone from '../GraveStone/graveStone';
import PropTypes from 'prop-types';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const studentGraves = this.props.deadStudents;
    
    const deadStudentCard = studentGraves.map((gravestone) => <Gravestone key={gravestone.id} gravestone={gravestone} />);

    return (
      <div className="graveYard">
       {deadStudentCard}
      </div>
    )
  }
}

export default Graveyard;
