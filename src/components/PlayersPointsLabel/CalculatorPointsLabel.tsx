import * as React from 'react';
import { Label } from '../Agnostic/Atoms/Label/Label';

const CalculatorPointsLabel = ({ points }: {points: number}) => <Label value={"Calculator points: " + points} />;

export default CalculatorPointsLabel;
