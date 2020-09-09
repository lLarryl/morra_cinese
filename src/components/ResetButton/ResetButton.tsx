import * as React from 'react';
import { FC } from 'react';

interface FCResetButton {
    resetHandler: React.ReactEventHandler;
}

const ResetButton: FC<FCResetButton> = ({ resetHandler }) => <button onClick={resetHandler}>RESET</button>;

export default ResetButton;
