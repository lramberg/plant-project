import React from 'react';

const LevelOneWater = (props) => {
    return(
        <div>
            <button onClick={() => props.handleIncrease(props.id, "increaseWater")}>Watering Can Plus</button>
            <button onClick={() => props.handleDecrease(props.id, "decreaseWater")}>Watering Can Minus</button>
        </div>
    );
}

export default LevelOneWater;