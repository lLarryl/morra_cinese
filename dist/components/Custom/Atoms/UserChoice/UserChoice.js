"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserChoice = ({ handleClick, value }) => react_1.default.createElement("button", { onClick: handleClick }, value);
exports.default = UserChoice;
//# sourceMappingURL=UserChoice.js.map