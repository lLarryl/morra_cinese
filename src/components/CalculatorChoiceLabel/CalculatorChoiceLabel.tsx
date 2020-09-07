import * as React from 'react';
import { Label } from '../Agnostic/Atoms/Label/Label';

const CalculatorChoiceLabel = ({choice}: {choice: string}) => <Label value={"The calculator has chosen... " + (choice !== '' ? choice : '')} />;

export default CalculatorChoiceLabel;
