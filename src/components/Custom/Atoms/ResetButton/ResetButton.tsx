import React, { FC } from 'react';

interface ResetButtonProps {
  resetHandler: React.ReactEventHandler;
}

const ResetButton: FC<ResetButtonProps> = ({ resetHandler }) => <button onClick={resetHandler}>RESET</button>;

export default ResetButton;
