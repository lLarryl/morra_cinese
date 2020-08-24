import React, { useState, useEffect } from 'react';
import UserChoice from './../../components/UserChoice/UserChoice';
import CalculatorChoiceLabel from './../../components/CalculatorChoiceLabel/CalculatorChoiceLabel';
import PlayLabel from './../../components/PlayLabel/PlayLabel';

const MorraCinese = props => {
    const [calculatorChoice, setCalculatorChoice] = useState("");
    const [playState, setPlayState] = useState(null);
    const userChoiceValues = ["ROCK", "SCISSORS", "PAPER"];

    function handleCalculatorChoice()
    {
        setCalculatorChoice(
            userChoiceValues[Math.random() * 2]
        );
    }

    useEffect(() => {
        console.log(calculatorChoice);
    }, [calculatorChoice]);

    return(
        <div>
            <CalculatorChoiceLabel choice={calculatorChoice} />
            <div>
            {
                userChoiceValues.map(choiceValue => (
                    <UserChoice onClick={handleCalculatorChoice} value={choiceValue} key={choiceValue}/>
                ))
            }
            </div>
            {
                playState !== null && <PlayLabel playState={playState} />
            }
        </div>
    );
}

export default MorraCinese;