"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Label_1 = require("../../../Agnostic/Atoms/Label/Label");
const CalculatorPointsLabel = ({ points }) => (react_1.default.createElement(Label_1.Label, { value: 'Calculator points: ' + points }));
exports.default = CalculatorPointsLabel;
//# sourceMappingURL=CalculatorPointsLabel.js.map