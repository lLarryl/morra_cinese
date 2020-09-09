import * as React from 'react';
import { FC } from 'react';
import { Label } from '../Agnostic/Atoms/Label/Label';

interface FCCalculatorPointsLabel {
    points: number;
}

const CalculatorPointsLabel: FC<FCCalculatorPointsLabel> = ({ points }) => <Label value={"Calculator points: " + points} />;

export default CalculatorPointsLabel;
