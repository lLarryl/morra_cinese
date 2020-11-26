import React, { FC } from 'react';
import { Button } from '../../../Agnostic/Atoms/Button/Button';

interface ResetButtonProps {
  resetHandler: React.ReactEventHandler;
}

const ResetButton: FC<ResetButtonProps> = ({ resetHandler }) => <Button onClickHandler={resetHandler} value="RESET" />;

export default ResetButton;
