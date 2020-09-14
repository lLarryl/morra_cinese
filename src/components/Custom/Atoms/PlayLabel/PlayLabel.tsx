import React, { FC } from 'react';
import { matchStatuses } from '../../containers/MorraCinese/MorraCinese';
import { Label } from '../../../Agnostic/Atoms/Label/Label';

interface PlayLabelProps {
  playState: string;
}

const PlayLabel: FC<PlayLabelProps> = ({ playState }) => {
  let status: string = determineStatus();
  
  function determineStatus(): string
  {
    if (playState === matchStatuses[0]) {
      return 'WIN :D';
    } else if (playState === matchStatuses[1]) {
      return 'LOOSE :(';
    } else {
      return 'DID THE SAME...';
    }
  }

  return (
    <div>
      <Label value={'YOU ' + status} />
    </div>
  );
};

export default PlayLabel;
