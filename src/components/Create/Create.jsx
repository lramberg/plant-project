import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createPlant } from '../../services/plantService';

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
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>NAME YOUR BUDDY: </label>
                    <input onChange={ this.handleName } value={ this.state.name } />
                    <input className="btn" type="submit" value="Submit" />
                </form>
                <Link className="btn" to='/profile'>Cancel</Link>

                <ul>
                    <li>Water your plant by clicking the watering can</li>
                    <li>Click the Sun to help it grow</li>
                    <li>Too much of good thing can do harm</li>
                    <li>See if you can find the balance to help your buddy grow</li>
                </ul>
            </div>
        );
    }
}

export default Create;