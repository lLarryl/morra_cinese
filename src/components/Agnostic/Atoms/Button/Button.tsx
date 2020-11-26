import React, { FC } from 'react';

interface ButtonProps {
  value: string;
  handler: React.ReactEventHandler;
}

export const Button: FC<ButtonProps> = ({ handler, value }) => (
  <div>
    <button onClick={handler}>{value}</button>
  </div>
);
