import React, { Component } from 'react';
import styles from './PlantDisplay.module.css';

class PlantDisplay extends Component {

    render() {
        return(
            <div className={styles.PlantDisplay}>
                PlantDisplay               
                <div className={styles.rim}></div>
                <div className={styles.pot}></div>             
            </div>
        )
    }
}

export default PlantDisplay;