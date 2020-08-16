import React from 'react';

const userChoice = (props) => {
    return(
        <button value={props.value}>{props.value}</button>
    );
};

export default userChoice;