import * as React from 'react';
import { FC } from 'react';
import { Label } from '../Agnostic/Atoms/Label/Label';

interface FCUserPointsLabel {
    points: number;
}

const UserPointsLabel: FC<FCUserPointsLabel> = ({ points }) => <Label value={"User points: " + points} />;

export default UserPointsLabel;
