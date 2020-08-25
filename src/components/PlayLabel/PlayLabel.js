import React from 'react';

const PlayLabel = props => {
    let status = "";
    const matchStatuses = ["WIN", "LOOSE", "TIE"];

    if(props.playState === matchStatuses[0]) {
        status = "WIN :D";
    } else if(props.playState === matchStatuses[1]) {
        status = "LOOSE :(";
    } else {
        status = "DID THE SAME...";
    }

    return(
        <div>
            <span>YOU {status}</span>
        </div>
    );
};

export default PlayLabel;