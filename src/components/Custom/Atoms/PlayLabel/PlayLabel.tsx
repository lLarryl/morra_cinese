import * as React from 'react';
import { FC } from 'react';
import { matchStatuses } from '../../containers/MorraCinese/MorraCinese';
import { Label } from '../../../Agnostic/Atoms/Label/Label';

interface PlayLabelProps {
  playState: string;
}

const PlayLabel: FC<PlayLabelProps> = ({ playState }) => {
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
      <Label value={'YOU ' + status} />
    </div>
  );
};

export default PlayLabel;
