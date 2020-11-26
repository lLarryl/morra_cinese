import React, { FC } from 'react';

interface ButtonProps {
  value: string;
  /**
   * TODO: rivedere il tipo e la questione degli handler a sfavore
   * delle funzioni specifiche per l'evento in causa
   **/
  onClickHandler: React.MouseEventHandler;
}

export const Button: FC<ButtonProps> = ({ onClickHandler, value }) => <button onClick={onClickHandler}>{value}</button>;
