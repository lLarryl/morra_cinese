import React, { useState, useEffect } from 'react';
import UserChoice from '../../Atoms/UserChoice/UserChoice';
import CalculatorChoiceLabel from '../../CalculatorChoiceLabel/CalculatorChoiceLabel';
import PlayLabel from '../../Atoms/PlayLabel/PlayLabel';
import PlayersPoints from '../PlayersPoints/PlayersPoints';
import ResetButton from '../../Atoms/ResetButton/ResetButton';
export var matchStatuses = ['WIN', 'LOOSE', 'TIE'];
var MorraCinese = function () {
    var _a = useState(''), calculatorChoice = _a[0], setCalculatorChoice = _a[1];
    var _b = useState(''), userChoice = _b[0], setUserChoice = _b[1];
    var _c = useState(''), playState = _c[0], setPlayState = _c[1];
    var _d = useState(0), userPoints = _d[0], setUserPoints = _d[1];
    var _e = useState(0), calculatorPoints = _e[0], setCalculatorPoints = _e[1];
    var userChoiceValues = ['ROCK', 'SCISSORS', 'PAPER'];
    var maxPoints = 10;
    function handleCalculatorChoice(userChoiceValue) {
        setCalculatorChoice(userChoiceValues[Math.floor(Math.random() * userChoiceValues.length)]);
        setUserChoice(userChoiceValue);
    }
    function checkPlayState(userChoiceValue) {
        setPlayState(function () {
            if (userChoiceValue === calculatorChoice) {
                return matchStatuses[2];
            }
            if (userChoiceValue === userChoiceValues[0] && calculatorChoice === userChoiceValues[1]) {
                return matchStatuses[0];
            }
            if (userChoiceValue === userChoiceValues[2] && calculatorChoice === userChoiceValues[0]) {
                return matchStatuses[0];
            }
            if (userChoiceValue === userChoiceValues[1] && calculatorChoice === userChoiceValues[2]) {
                return matchStatuses[0];
            }
            return matchStatuses[1];
        });
    }
    function determinePoints() {
        if (userPoints === maxPoints || calculatorPoints === maxPoints) {
            resetPoints();
        }
        if (playState === matchStatuses[0]) {
            setUserPoints(function (prevPoints) { return prevPoints + 1; });
            return;
        }
        setCalculatorPoints(function (prevPoints) { return prevPoints + 1; });
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
    useEffect(function () { return (calculatorChoice && userChoice ? checkPlayState(userChoice) : undefined); }, [
        calculatorChoice,
        userChoice,
    ]);
    useEffect(function () { return (playState && playState != matchStatuses[2] ? determinePoints() : undefined); }, [playState]);
    return (React.createElement("div", { className: "App" },
        React.createElement(CalculatorChoiceLabel, { choice: calculatorChoice }),
        React.createElement("div", null, userChoiceValues.map(function (choiceValue) { return (React.createElement(UserChoice, { handleClick: function () { return handleCalculatorChoice(choiceValue); }, value: choiceValue, key: choiceValue })); })),
        playState !== '' && React.createElement(PlayLabel, { playState: playState }),
        React.createElement(PlayersPoints, { userPoints: userPoints, calculatorPoints: calculatorPoints }),
        React.createElement(ResetButton, { resetHandler: handleReset })));
};
export default MorraCinese;
//# sourceMappingURL=MorraCinese.js.map