import React, { FC } from 'react';
import { Label } from '../../../Agnostic/Atoms/Label/Label';

interface CalculatorPointsLabelProps {
  points: number;
}

const CalculatorPointsLabel: FC<CalculatorPointsLabelProps> = ({ points }) => (
  <Label value={'Calculator points: ' + points} />
);

export default CalculatorPointsLabel;
