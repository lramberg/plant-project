import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPlants } from '../../services/plantService';
import styles from './Index.module.css';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            plants: []
        }
    }

    componentDidMount() {
        var self = this;
        getPlants().then(function(json) {
            self.setState({plants: json})
        })
    }

    render(props) {
        var buddies = this.state.plants.map((plant, idx) => {
            {if(plant.userId === this.props.user._id){
                return (
                    <li key={idx}>
                        <Link to={`/buddy/${plant._id}`} className={styles.li}>{plant.name}</Link>
                    </li>
                )
            }}
        });

        return(
            <div className={styles.Index}>
                <ul className={styles.ul}>
                    {buddies}
                </ul>
            </div>
        );
    }
}

export default Index;