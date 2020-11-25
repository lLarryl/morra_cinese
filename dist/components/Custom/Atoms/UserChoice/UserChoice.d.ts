import React, { FC } from 'react';
interface UserChoiceProps {
    handleClick: React.ReactEventHandler;
    value: string;
}
declare const UserChoice: FC<UserChoiceProps>;
export default UserChoice;
