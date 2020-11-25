"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MorraCinese_1 = require("../../containers/MorraCinese/MorraCinese");
const Label_1 = require("../../../Agnostic/Atoms/Label/Label");
const PlayLabel = ({ playState }) => {
    const status = () => {
        if (playState === MorraCinese_1.matchStatuses[0]) {
            return 'WIN :D';
        }
        else if (playState === MorraCinese_1.matchStatuses[1]) {
            return 'LOOSE :(';
        }
        else {
            return 'DID THE SAME...';
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Label_1.Label, { value: 'YOU ' + status() })));
};
exports.default = PlayLabel;
//# sourceMappingURL=PlayLabel.js.map