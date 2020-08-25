import React from 'react';

const CalculatorChoiceLabel = props => {
  return (
    <div>
      <span>The calculator has chosen... {props.choice !== '' ? props.choice : ''}</span>
    </div>
  );
};

export default CalculatorChoiceLabel;
