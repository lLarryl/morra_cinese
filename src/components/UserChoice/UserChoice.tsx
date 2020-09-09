import * as React from 'react';
import { FC } from 'react';

interface FCUserChoice {
    handleClick: React.ReactEventHandler;
    value: string;
}

const UserChoice: FC<FCUserChoice> = ({ handleClick, value }) => <button onClick={handleClick}>{value}</button>;

export default UserChoice;
