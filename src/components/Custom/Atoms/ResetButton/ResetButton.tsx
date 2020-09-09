import * as React from 'react';
import { FC } from 'react';

interface ResetButtonProps {
  resetHandler: React.ReactEventHandler;
}

const ResetButton: FC<ResetButtonProps> = ({ resetHandler }) => <button onClick={resetHandler}>RESET</button>;

export default ResetButton;
