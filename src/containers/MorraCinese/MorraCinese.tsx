import * as React from 'react';
import { useState, useEffect } from 'react';
import UserChoice from '../../components/UserChoice/UserChoice';
import CalculatorChoiceLabel from '../../components/CalculatorChoiceLabel/CalculatorChoiceLabel';
import PlayLabel from '../../components/PlayLabel/PlayLabel';
import PlayersPoints from '../PlayersPoints/PlayersPoints';
import ResetButton from '../../components/ResetButton/ResetButton';

export const matchStatuses: Array<string> = ['WIN', 'LOOSE', 'TIE'];

const MorraCinese = () => {
  const [calculatorChoice, setCalculatorChoice] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [playState, setPlayState] = useState('');
  const [userPoints, setUserPoints] = useState(0);
  const [calculatorPoints, setCalculatorPoints] = useState(0);
  const userChoiceValues: Array<string> = ['ROCK', 'SCISSORS', 'PAPER'];
  const maxPoints: number = 10;

  function handleCalculatorChoice(userChoiceValue: string): void {
    setCalculatorChoice(userChoiceValues[Math.floor(Math.random() * userChoiceValues.length)]);
    setUserChoice(userChoiceValue);
  }

  function checkPlayState(userChoiceValue: string): void {
    setPlayState(() => {
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

  function determinePoints(): void {
    if (userPoints === maxPoints || calculatorPoints === maxPoints) {
      resetPoints();
    }
    if (playState === matchStatuses[0]) {
      setUserPoints(prevPoints => prevPoints + 1);
      return;
    }
    setCalculatorPoints(prevPoints => prevPoints + 1);
  }

  function resetPoints(): void {
    setUserPoints(0);
    setCalculatorPoints(0);
  }

  function handleReset(): void {
    resetPoints();
    setPlayState("");
    setCalculatorChoice('');
  }

  useEffect(() => (calculatorChoice && userChoice ? checkPlayState(userChoice) : undefined), [
    calculatorChoice,
    userChoice,
  ]);

  useEffect(() => (playState && playState != matchStatuses[2] ? determinePoints() : undefined), [
    playState  
  ])

  return (
    <div className="App">
      <CalculatorChoiceLabel choice={calculatorChoice} />
      <div>
        {userChoiceValues.map(choiceValue => (
          <UserChoice handleClick={() => handleCalculatorChoice(choiceValue)} value={choiceValue} key={choiceValue} />
        ))}
      </div>
      {playState !== '' && <PlayLabel playState={playState} />}
      <PlayersPoints userPoints={userPoints} calculatorPoints={calculatorPoints} />
      <ResetButton resetHandler={handleReset} />
    </div>
  );
};

export default MorraCinese;
