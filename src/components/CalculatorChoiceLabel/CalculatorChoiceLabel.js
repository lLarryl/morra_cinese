import React from 'react';
import { Label } from './../Agnostic/Atoms/Label/Label';

const CalculatorChoiceLabel = ({choice}) => <Label value={"The calculator has chosen... " + (choice !== '' ? choice : '')} />;

export default CalculatorChoiceLabel;
