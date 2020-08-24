import React from 'react';

const PlayLabel = props => {
    return(
        <div>
            <span>YOU {props.playState === true ? "WIN :D" : "LOOSE :("}</span>
        </div>
    );
};

export default PlayLabel;