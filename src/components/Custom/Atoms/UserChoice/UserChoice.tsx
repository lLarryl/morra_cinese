import React, { FC } from 'react';
import { Button } from '../../../Agnostic/Atoms/Button/Button';

interface UserChoiceProps {
  handleClick: React.ReactEventHandler;
  value: string;
}

const UserChoice: FC<UserChoiceProps> = ({ handleClick, value }) => <Button onClickHandler={handleClick} value={value}/>;

export default UserChoice;
