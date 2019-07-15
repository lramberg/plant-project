import React from 'react';
import styles from './Bud.module.css';

const Bud = (props) => {
    return(
        <div className={styles.Bud}>
            <div className={styles.leaf}></div>
            <div className={styles.stem}></div>
            <div className={styles.leafTwo}></div>
            <div className={styles.leafThree}></div>
            <div className={styles.budWrapper}>
                <div className={styles.budLeaf}></div>
                <div className={styles.budLeafTwo}></div>
                <div className={styles.bulb}></div>
            </div>
        </div>
    );
}

export default Bud;