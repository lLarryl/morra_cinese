import React, { useState, useEffect } from 'react';
import UserChoice from '../../components/UserChoice/UserChoice';
import CalculatorChoiceLabel from './../../components/CalculatorChoiceLabel/CalculatorChoiceLabel';
import PlayLabel from './../../components/PlayLabel/PlayLabel';
import PlayersPoints from './../PlayersPoints/PlayersPoints';
import ResetButton from './../../components/ResetButton/ResetButton';

const MorraCinese = props => {
    const [calculatorChoice, setCalculatorChoice] = useState();
    const [playState, setPlayState] = useState(null);
    const [userPoints, setUserPoints] = useState(0);
    const [calculatorPoints, setCalculatorPoints] = useState(0);
    const userChoiceValues = ["ROCK", "SCISSORS", "PAPER"];

    function handleCalculatorChoice(userChoiceValue)
    {
        setCalculatorChoice(
            userChoiceValues[Math.floor(Math.random() * 2)]
        );
        checkPlayState(userChoiceValue);
    }

    function checkPlayState(userChoiceValue)
    {
        console.log(userChoiceValue);
        console.log(calculatorChoice);
        let winner = false;
        if(userChoiceValue === calculatorChoice) {
            winner = true;
        }
        if(userChoiceValue === "ROCK" && calculatorChoice === "SCISSORS") {
            winner = true;
        }
        if(userChoiceValue === "PAPER" && calculatorChoice === "ROCK") {
            winner = true;
        }
        if(userChoiceValue === "SCISSORS" && calculatorChoice === "PAPER") {
            winner = true;
        }

        setPlayState(
            winner
        );

        setPoints(winner);
    }

    function setPoints(winner)
    {
        if(userPoints === 10 || calculatorPoints === 10) {
            resetPoints();
        }
        if(winner) {
            setUserPoints(prevPoints => (
                prevPoints + 1
            ));
            return;
        }
        setCalculatorPoints(prevPoints => (
            prevPoints + 1
        ));
    }

    function resetPoints()
    {
        setUserPoints(0);
        setCalculatorPoints(0);
    }

    function handleReset()
    {
        resetPoints();
        setPlayState(null);
        setCalculatorChoice("");
    }

    return(
        <div>
            <CalculatorChoiceLabel choice={calculatorChoice} />
            <div>
            {
                userChoiceValues.map(choiceValue => (
                    <UserChoice handleCalculatorChoice={handleCalculatorChoice} value={choiceValue} key={choiceValue}/>
                ))
            }
            </div>
            {
                playState !== null && <PlayLabel playState={playState} />
            }
            <PlayersPoints userPoints={userPoints} calculatorPoints={calculatorPoints} />
            <ResetButton resetHandler={handleReset} />
        </div>
    );
}

export default MorraCinese;