import React, { FC } from 'react';

interface LabelProps {
  value: string;
}

export const Label: FC<LabelProps> = ({ value }) => (
  <div>
    <span>{value}</span>
  </div>
);
