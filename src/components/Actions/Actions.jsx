import React from 'react';
import styles from './Actions.module.css';

const Actions = (props) => {
    return(
        <div className={styles.Actions}>
            <div className={styles.sunWrapper} onClick={() => props.handleDecrease(props.id, "decreaseWater")}>
                <div className={styles.sun}></div>
                <div className={styles.rays1}></div>
                <div className={styles.rays2}></div>
            </div>
            <div className={styles.canWrapper} onClick={() => props.handleIncrease(props.id, "increaseWater")}>
                <div className={styles.handle}></div>
                <div className={styles.spout}></div>
                <div className={styles.body}></div>
            </div>
        </div>
    );
}

export default Actions;