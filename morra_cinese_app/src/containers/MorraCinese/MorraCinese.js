import React from 'react';
import UserChoice from './../../components/UserChoice/UserChoice';

const morraCinese = props => {
    return(
        <div>
            <UserChoice value="SASSO" />
            <UserChoice value="CARTA" />
            <UserChoice value="FORBICE" />
        </div>
    );
}

export default morraCinese;