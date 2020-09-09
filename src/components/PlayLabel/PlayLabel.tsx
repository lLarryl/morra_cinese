import * as React from 'react';
import { FC } from 'react';
import {matchStatuses} from './../../containers/MorraCinese/MorraCinese';

interface FCPlayLabel {
  playState: string;
}

const PlayLabel: FC<FCPlayLabel> = ({playState}) => {
  let status: string;

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
