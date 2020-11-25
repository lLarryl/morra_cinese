"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Label_1 = require("../../../Agnostic/Atoms/Label/Label");
const UserPointsLabel = ({ points }) => react_1.default.createElement(Label_1.Label, { value: 'User points: ' + points });
exports.default = UserPointsLabel;
//# sourceMappingURL=UserPointsLabel.js.map