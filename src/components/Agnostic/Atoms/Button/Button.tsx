import React, { FC } from 'react';

interface ButtonProps {
  value: string;
  onClickHandler: React.MouseEventHandler;
}

export const Button: FC<ButtonProps> = ({ onClickHandler, value }) => <button onClick={onClickHandler}>{value}</button>;
