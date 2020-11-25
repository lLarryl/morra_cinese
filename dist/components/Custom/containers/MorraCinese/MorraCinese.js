"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchStatuses = void 0;
const react_1 = __importStar(require("react"));
const UserChoice_1 = __importDefault(require("../../Atoms/UserChoice/UserChoice"));
const CalculatorChoiceLabel_1 = __importDefault(require("../../CalculatorChoiceLabel/CalculatorChoiceLabel"));
const PlayLabel_1 = __importDefault(require("../../Atoms/PlayLabel/PlayLabel"));
const PlayersPoints_1 = __importDefault(require("../PlayersPoints/PlayersPoints"));
const ResetButton_1 = __importDefault(require("../../Atoms/ResetButton/ResetButton"));
exports.matchStatuses = ['WIN', 'LOOSE', 'TIE'];
const MorraCinese = () => {
    const [calculatorChoice, setCalculatorChoice] = react_1.useState('');
    const [userChoice, setUserChoice] = react_1.useState('');
    const [playState, setPlayState] = react_1.useState('');
    const [userPoints, setUserPoints] = react_1.useState(0);
    const [calculatorPoints, setCalculatorPoints] = react_1.useState(0);
    const userChoiceValues = ['ROCK', 'SCISSORS', 'PAPER'];
    const maxPoints = 10;
    function handleCalculatorChoice(userChoiceValue) {
        setCalculatorChoice(userChoiceValues[Math.floor(Math.random() * userChoiceValues.length)]);
        setUserChoice(userChoiceValue);
    }
    function checkPlayState(userChoiceValue) {
        setPlayState(() => {
            if (userChoiceValue === calculatorChoice) {
                return exports.matchStatuses[2];
            }
            if (userChoiceValue === userChoiceValues[0] && calculatorChoice === userChoiceValues[1]) {
                return exports.matchStatuses[0];
            }
            if (userChoiceValue === userChoiceValues[2] && calculatorChoice === userChoiceValues[0]) {
                return exports.matchStatuses[0];
            }
            if (userChoiceValue === userChoiceValues[1] && calculatorChoice === userChoiceValues[2]) {
                return exports.matchStatuses[0];
            }
            return exports.matchStatuses[1];
        });
    }
    function determinePoints() {
        if (userPoints === maxPoints || calculatorPoints === maxPoints) {
            resetPoints();
        }
        if (playState === exports.matchStatuses[0]) {
            setUserPoints((prevPoints) => prevPoints + 1);
            return;
        }
        setCalculatorPoints((prevPoints) => prevPoints + 1);
    }
    function resetPoints() {
        setUserPoints(0);
        setCalculatorPoints(0);
    }
    function handleReset() {
        resetPoints();
        setPlayState('');
        setCalculatorChoice('');
    }
    react_1.useEffect(() => (calculatorChoice && userChoice ? checkPlayState(userChoice) : undefined), [
        calculatorChoice,
        userChoice,
    ]);
    react_1.useEffect(() => (playState && playState != exports.matchStatuses[2] ? determinePoints() : undefined), [playState]);
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(CalculatorChoiceLabel_1.default, { choice: calculatorChoice }),
        react_1.default.createElement("div", null, userChoiceValues.map((choiceValue) => (react_1.default.createElement(UserChoice_1.default, { handleClick: () => handleCalculatorChoice(choiceValue), value: choiceValue, key: choiceValue })))),
        playState !== '' && react_1.default.createElement(PlayLabel_1.default, { playState: playState }),
        react_1.default.createElement(PlayersPoints_1.default, { userPoints: userPoints, calculatorPoints: calculatorPoints }),
        react_1.default.createElement(ResetButton_1.default, { resetHandler: handleReset })));
};
exports.default = MorraCinese;
//# sourceMappingURL=MorraCinese.js.map