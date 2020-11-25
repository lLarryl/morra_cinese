import React from 'react';
import { matchStatuses } from '../../containers/MorraCinese/MorraCinese';
import { Label } from '../../../Agnostic/Atoms/Label/Label';
var PlayLabel = function (_a) {
    var playState = _a.playState;
    var status = function () {
        if (playState === matchStatuses[0]) {
            return 'WIN :D';
        }
        else if (playState === matchStatuses[1]) {
            return 'LOOSE :(';
        }
        else {
            return 'DID THE SAME...';
        }
    };
    return (React.createElement("div", null,
        React.createElement(Label, { value: 'YOU ' + status() })));
};
export default PlayLabel;
//# sourceMappingURL=PlayLabel.js.map