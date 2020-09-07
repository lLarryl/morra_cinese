import * as React from 'react';
import UserPointsLabel from '../../components/PlayersPointsLabel/UserPointsLabel';
import CalculatorPointsLabel from '../../components/PlayersPointsLabel/CalculatorPointsLabel';

const PlayerPoints = ({ userPoints, calculatorPoints}: {userPoints: number, calculatorPoints: number}) => {
  return (
    <div>
      <UserPointsLabel points={userPoints} />
      <CalculatorPointsLabel points={calculatorPoints} />
    </div>
  );
};

export default PlayerPoints;
