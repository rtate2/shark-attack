import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

import './graveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    deadStudents: studentShape.studentShape,
  }

  render() {
    const { gravestone } = this.props;

    return (
      <div className="headStone">
        <p className="first text-white m-0">{gravestone.firstName}</p>
        <p className="last text-white m-0">{gravestone.lastName}</p>
        <img className="image mb-5 grave-stone" src="http://pngimg.com/uploads/gravestone/gravestone_PNG54.png" alt="gravestone"></img>
      </div>
    );
  }
}

export default GraveStone;
