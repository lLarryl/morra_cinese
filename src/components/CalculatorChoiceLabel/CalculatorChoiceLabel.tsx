import * as React from 'react';
import { FC } from 'react';
import { Label } from '../Agnostic/Atoms/Label/Label';

interface FCCalculatorChoiceLabel {
    choice: string
};

const CalculatorChoiceLabel: FC<FCCalculatorChoiceLabel> = ({choice}) => <Label value={"The calculator has chosen... " + (choice !== '' ? choice : '')} />;

export default CalculatorChoiceLabel;
