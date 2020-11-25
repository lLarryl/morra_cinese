import React from 'react';
import UserPointsLabel from '../../Atoms/PlayersPointsLabel/UserPointsLabel';
import CalculatorPointsLabel from '../../Atoms/PlayersPointsLabel/CalculatorPointsLabel';
var PlayerPoints = function (_a) {
    var userPoints = _a.userPoints, calculatorPoints = _a.calculatorPoints;
    return (React.createElement("div", null,
        React.createElement(UserPointsLabel, { points: userPoints }),
        React.createElement(CalculatorPointsLabel, { points: calculatorPoints })));
};
export default PlayerPoints;
//# sourceMappingURL=PlayersPoints.js.map