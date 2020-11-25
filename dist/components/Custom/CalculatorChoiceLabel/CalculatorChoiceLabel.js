import React from 'react';
import { Label } from '../../Agnostic/Atoms/Label/Label';
var CalculatorChoiceLabel = function (_a) {
    var choice = _a.choice;
    return (React.createElement(Label, { value: 'The calculator has chosen... ' + (choice !== '' ? choice : '') }));
};
export default CalculatorChoiceLabel;
//# sourceMappingURL=CalculatorChoiceLabel.js.map