import React from 'react';

const LevelOneWater = (props) => {
    return(
        <div>
            <button onClick={props.handleIncrease}>Watering Can Plus</button>
            <button onClick={props.handleDecrease}>Watering Can Minus</button>
        </div>
    );
}

export default LevelOneWater;