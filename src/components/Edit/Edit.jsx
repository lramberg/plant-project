import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPlant, editPlant } from '../../services/plantService';

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;

        getPlant(id).then(function(plant) {
            self.setState({ id: plant._id, name: plant.name })
        });
    }

    handleName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var self = this;
        editPlant(this.state).then(function(json) {
            window.location = `/buddy/${self.state.id}`;
        });
    }

    render() {
        return(
            <div>
                <h1>Rename Your Buddy</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>New Name</label>
                    <input onChange={ this.handleName } value={ this.state.name } />
                    <input type="submit" value="Submit" />
                </form>
                <Link to={`/buddy/${this.state.id}`}>Cancel</Link>
            </div>
        );
    }
}

export default Edit;