import React, { FC } from 'react';
import { Button } from '../../../Agnostic/Atoms/Button/Button';

interface ResetButtonProps {
  /**
   * TODO: rivedere il tipo, differisce da quello di Button e la questione degli handler a sfavore
   * delle funzioni specifiche per l'evento in causa
   **/
  resetHandler: React.ReactEventHandler; 
}

const ResetButton: FC<ResetButtonProps> = ({ resetHandler }) => <Button onClickHandler={resetHandler} value="RESET" />;

export default ResetButton;
