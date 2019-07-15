import React, { Component } from 'react';
import styles from './PlantDisplay.module.css';


class PlantDisplay extends Component {

    render() {
        return(
            <div className={styles.PlantDisplay}>
                <div className={styles.componentContainer}>
                    {this.props.plantState}
                </div>
                <div className={styles.rim}></div>
                <div className={styles.pot}></div>             
            </div>
        )
    }
}

export default PlantDisplay;