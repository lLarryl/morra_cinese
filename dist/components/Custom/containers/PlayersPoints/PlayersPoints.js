"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserPointsLabel_1 = __importDefault(require("../../Atoms/PlayersPointsLabel/UserPointsLabel"));
const CalculatorPointsLabel_1 = __importDefault(require("../../Atoms/PlayersPointsLabel/CalculatorPointsLabel"));
const PlayerPoints = ({ userPoints, calculatorPoints }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(UserPointsLabel_1.default, { points: userPoints }),
        react_1.default.createElement(CalculatorPointsLabel_1.default, { points: calculatorPoints })));
};
exports.default = PlayerPoints;
//# sourceMappingURL=PlayersPoints.js.map