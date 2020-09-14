import React, { FC } from 'react';
import { Label } from '../Agnostic/Atoms/Label/Label';

interface CalculatorChoiceLabelProps {
  choice: string;
}

const CalculatorChoiceLabel: FC<CalculatorChoiceLabelProps> = ({ choice }) => (
  <Label value={'The calculator has chosen... ' + (choice !== '' ? choice : '')} />
);

export default CalculatorChoiceLabel;
