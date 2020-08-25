import React from 'react';

const UserChoice = (props) => {
    return(
        <button onClick={() => props.handleCalculatorChoice(props.value)} value={props.value}>{props.value}</button>
    );
};

export default UserChoice;