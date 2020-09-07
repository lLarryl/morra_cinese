import * as React from 'react';

const ResetButton = ({ resetHandler }: {resetHandler: React.ReactEventHandler}) => <button onClick={resetHandler}>RESET</button>;

export default ResetButton;
