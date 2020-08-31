import React, { useState, useEffect } from 'react';
import UserChoice from '../../components/UserChoice/UserChoice';
import CalculatorChoiceLabel from './../../components/CalculatorChoiceLabel/CalculatorChoiceLabel';
import PlayLabel from './../../components/PlayLabel/PlayLabel';
import PlayersPoints from './../PlayersPoints/PlayersPoints';
import ResetButton from './../../components/ResetButton/ResetButton';

const MorraCinese = props => {
    const [calculatorChoice, setCalculatorChoice] = useState("");
    const [userChoice, setUserChoice] = useState("");
    const [playState, setPlayState] = useState("");
    const [userPoints, setUserPoints] = useState(0);
    const [calculatorPoints, setCalculatorPoints] = useState(0);
    const userChoiceValues = ["ROCK", "SCISSORS", "PAPER"];
    const matchStatuses = ["WIN", "LOOSE", "TIE"];

    function handleCalculatorChoice(userChoiceValue)
    {
        setCalculatorChoice(
            userChoiceValues[Math.floor(Math.random() * userChoiceValues.length)]
        );
        setUserChoice(
            userChoiceValue
        );
    }

    useEffect(() => {
        checkPlayState();
    }, [calculatorChoice]);

    function checkPlayState()
    {
        console.log(`userChoiceValue: ${userChoice}`, `calculatorChoice: ${calculatorChoice}`);
        if(calculatorChoice !== "") {
            let matchStatus = matchStatuses[1];
            if(userChoice === calculatorChoice) {
                setPlayState(
                    matchStatuses[2]
                );
                return;
            }
            if(userChoice === "ROCK" && calculatorChoice === "SCISSORS") {
                matchStatus = matchStatuses[0];
            }
            if(userChoice === "PAPER" && calculatorChoice === "ROCK") {
                matchStatus = matchStatuses[0];
            }
            if(userChoice === "SCISSORS" && calculatorChoice === "PAPER") {
                matchStatus = matchStatuses[0];
            }
    
            setPlayState(
                matchStatus
            );
    
            determinePoints(matchStatus);
        }
    }

    function determinePoints(matchStatus)
    {
        console.log('determine' + matchStatus);
        if(userPoints === 10 || calculatorPoints === 10) {
            resetPoints();  
        }
        if(matchStatus === matchStatuses[0]) {
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
                playState !== "" && <PlayLabel playState={playState} />
            }
            <PlayersPoints userPoints={userPoints} calculatorPoints={calculatorPoints} />
            <ResetButton resetHandler={handleReset} />
        </div>
    );
}

export default MorraCinese;