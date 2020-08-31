import React from 'react';
import { Label } from './../Agnostic/Atoms/Label/Label';

const UserPointsLabel = ({points}) => <Label value={"User points: " + points} />;

export default UserPointsLabel;
