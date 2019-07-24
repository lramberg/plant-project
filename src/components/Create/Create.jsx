import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createPlant } from '../../services/plantService';
import styles from './Create.module.css';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    handleName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        createPlant(this.state).then(function(res) {
            return res.json();
        }).then(function(plant) {
            window.location = `/buddy/${plant._id}`;
        })
    }
     
    render() {
        return (
            <div className={styles.Create}>
                <form onSubmit={this.handleSubmit} >
                    <h1>NAME YOUR BUDDY: </h1>
                    <input onChange={ this.handleName } value={ this.state.name } placeholder="Name"/>
                    <input className="btn btn-outline-light ml-2" type="submit" value="Submit" />
                    <Link className="btn btn-outline-light ml-2" to='/profile'>Cancel</Link>
                </form>

                <h2 className={styles.h2}>How to Play:</h2>
                <ul className={styles.ul}>
                    <li>Click the watering can to water your plant</li>
                    <li>Click the Sun to help it grow</li>
                    <li>Keep an eye on the soil conditions to determine if you need water or sunlight</li>
                    <li>See if you can find the balance to help your buddy grow</li>
                    <li>Remember, too much of good thing can do harm</li>
                </ul>
            </div>
        );
    }
}

export default Create;