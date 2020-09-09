import * as React from 'react';
import { FC } from 'react';
import UserPointsLabel from '../../components/PlayersPointsLabel/UserPointsLabel';
import CalculatorPointsLabel from '../../components/PlayersPointsLabel/CalculatorPointsLabel';

interface FCPlayerPoints {
  userPoints: number;
  calculatorPoints: number
}

const PlayerPoints: FC<FCPlayerPoints> = ({ userPoints, calculatorPoints}) => {
  return (
    <div>
      <UserPointsLabel points={userPoints} />
      <CalculatorPointsLabel points={calculatorPoints} />
    </div>
  );
};

export default PlayerPoints;
