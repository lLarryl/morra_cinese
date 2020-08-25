import React from 'react';
import UserPointsLabel from './../../components/PlayersPointsLabel/UserPointsLabel';
import CalculatorPointsLabel from './../../components/PlayersPointsLabel/CalculatorPointsLabel';

const PlayerPoints = props => {
  return (
    <div>
      <UserPointsLabel points={props.userPoints} />
      <CalculatorPointsLabel points={props.calculatorPoints} />
    </div>
  );
};

export default PlayerPoints;
