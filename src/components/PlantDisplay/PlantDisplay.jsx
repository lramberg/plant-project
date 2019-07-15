import React, { Component } from 'react';
import styles from './PlantDisplay.module.css';
import Sprout from '../Sprout/Sprout';
import Stem from '../Stem/Stem';

class PlantDisplay extends Component {

    render() {
        return(
            <div className={styles.PlantDisplay}>
                <div className={styles.componentContainer}>
                    <Stem />
                </div>
                <div className={styles.rim}></div>
                <div className={styles.pot}></div>             
            </div>
        )
    }
}

export default PlantDisplay;