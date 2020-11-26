import React, { FC } from 'react';
import UserPointsLabel from '../../Atoms/PlayersPointsLabel/UserPointsLabel';
import CalculatorPointsLabel from '../../Atoms/CalculatorPointsLabel/CalculatorPointsLabel';

interface PlayerPointsProps {
  userPoints: number;
  calculatorPoints: number;
}

const PlayerPoints: FC<PlayerPointsProps> = ({ userPoints, calculatorPoints }) => {
  return (
    <div>
      <UserPointsLabel points={userPoints} />
      <CalculatorPointsLabel points={calculatorPoints} />
    </div>
  );
};

export default PlayerPoints;
