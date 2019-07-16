import React from 'react';
import styles from './Flower.module.css';

const Flower = (props) => {
    return(
        <div className={styles.Flower}>
            <div className={styles.leaf}></div>
            <div className={styles.stem}></div>
            <div className={styles.leafTwo}></div>
            <div className={styles.leafThree}></div>
            <div className={styles.flowerWrapper}>
                <div className={styles.flowerLeaf}></div>
                <div className={styles.flowerLeafTwo}></div>
                <div className={styles.flowerLeafThree}></div>
                <div className={styles.flowerLeafFour}></div>
                <div className={styles.bulb}>
                </div>
                <div className={styles.eyeL}></div>
                <div className={styles.eyeR}></div>
                <div className={styles.smile}></div>
            </div>
        </div>
    );
}

export default Flower;