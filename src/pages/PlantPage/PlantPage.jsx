import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';
import Sunlight from '../../components/Sunlight/Sunlight';
import { getPlant, deletePlant, increaseWater } from '../../services/plantService';
import LevelOneWater from '../../components/LevelOneWater/LevelOneWater';

class PlantPage extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            waterSum: '',
            plantGrowth: ''
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;

        getPlant(id).then(function(plant) {
            console.log(plant);
            self.setState({ id: id, name: plant.name, waterSum: plant.waterSum, plantGrowth: plant.growth });
        });
    }

    handleDelete = (id) => {
        deletePlant(id).then(function(json) {
            window.location = '/profile';
        })
    }

    handleIncrease = (id, type) => {
        var self = this;
        increaseWater(id, type).then(function(json) {
            getPlant(id).then(function(plant) {
                self.setState({ waterSum: plant.waterSum, plantGrowth: plant.growth })
            });
        });
    }

    handleDecrease = (id, type) => {
        var self = this;
        increaseWater(id, type).then(function(json) {
            getPlant(id).then(function(plant) {
                self.setState({ waterSum: plant.waterSum, plantGrowth: plant.growth })
            });
        });
    }

    plantState = () => {
        var growth = this.state.plantGrowth;
        console.log(growth);
        switch(growth) {
            case 1:
                return <PlantDisplay />;
            case 2:
                return <Sunlight />;
            default:
                return null;
        }
    }

    render() {

        return(
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <h1>{this.state.name}</h1>
                <a href="#" className="btn btn-info" onClick={() => this.handleDelete(this.state.id)}>Delete Post <i className="fa fa-trash"></i></a>
                <Link to={`/buddy/${this.state.id}/edit`} className="btn btn-secondary">Edit Plant</Link>
                <p>Water Sum {this.state.waterSum}</p>
                <p>Plant Growth: {this.state.plantGrowth}</p>
                <LevelOneWater 
                    id={this.state.id}
                    handleIncrease={this.handleIncrease}
                    handleDecrease={this.handleDecrease}
                />
            </div>
        );
    }
}

export default PlantPage;