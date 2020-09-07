import * as React from 'react';
import { Label } from '../Agnostic/Atoms/Label/Label';

const UserPointsLabel = ({ points }: {points: number}) => <Label value={"User points: " + points} />;

export default UserPointsLabel;
