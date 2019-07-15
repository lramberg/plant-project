import React from 'react';
import styles from './Stem.module.css';

const Stem = (props) => {
    return(
        <div className={styles.Stem}>
            <div className={styles.leaf}></div>
            <div className={styles.stem}></div>
        </div>
    );
}

export default Stem;