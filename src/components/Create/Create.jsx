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
                <h1>Plant Your New Friend</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>Name your buddy</label>
                    <input onChange={ this.handleName } value={ this.state.name } />
                    <input type="submit" value="Submit" />
                </form>
                <Link to='/profile'>Cancel</Link>

                <p>Your botanical buddy is a Trifolium floridum. The soil must be kept moist but not over watered. They like bright sunlight, however if they stay in the sun too long, thier leaves begin to get crispy.</p>
            </div>
        );
    }
}

export default Create;