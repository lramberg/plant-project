import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';
import Actions from '../../components/Actions/Actions';
import CareInstructions from '../../components/CareInstructions/CareInstructions';
import Meters from '../../components/Meters/Meters';
import Sunlight from '../../components/Sunlight/Sunlight';
import { getPlant } from '../../services/plantService';

class PlantPage extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;

        getPlant(id).then(function(plant) {
            console.log(plant);
            self.setState({ name: plant.name });
        });
    }

    render() {
        return(
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <h1>{this.state.name}</h1>
                <Actions />
                <CareInstructions />
                <Meters />
                <PlantDisplay />
                <Sunlight />
            </div>
        );
    }
}

export default PlantPage;