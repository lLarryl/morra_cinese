import React, { FC } from 'react';
import { Label } from '../../../Agnostic/Atoms/Label/Label';

interface UserPointsLabelProps {
  points: number;
}

const UserPointsLabel: FC<UserPointsLabelProps> = ({ points }) => <Label value={'User points: ' + points} />;

export default UserPointsLabel;
