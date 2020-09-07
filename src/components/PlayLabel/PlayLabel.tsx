import React from 'react';

const PlayLabel = ({playState}: {playState: string}) => {
  let status = '';
  const matchStatuses = ['WIN', 'LOOSE', 'TIE'];

  if (playState === matchStatuses[0]) {
    status = 'WIN :D';
  } else if (playState === matchStatuses[1]) {
    status = 'LOOSE :(';
  } else {
    status = 'DID THE SAME...';
  }

  return (
    <div>
      <span>YOU {status}</span>
    </div>
  );
};

export default PlayLabel;
