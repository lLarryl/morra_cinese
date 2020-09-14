import React, { FC } from 'react';


interface UserChoiceProps {
  handleClick: React.ReactEventHandler;
  value: string;
}

const UserChoice: FC<UserChoiceProps> = ({ handleClick, value }) => <button onClick={handleClick}>{value}</button>;

export default UserChoice;
