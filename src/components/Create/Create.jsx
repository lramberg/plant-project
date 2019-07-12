import React, { Component } from 'react';
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
        createPlant(this.state).then(function(json) {
            window.location = '/profile';
        });
    }
     
    render() {
        return (
            <div>
                <h1>Add a New Plant Friend</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>Name your buddy</label>
                    <input onChange={ this.handleName } value={ this.state.name } />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Create;