import React, { ReactEventHandler } from 'react';

const UserChoice = ({ handleClick, value }: {handleClick: React.ReactEventHandler, value: string}) => <button onClick={handleClick}>{value}</button>;

export default UserChoice;
