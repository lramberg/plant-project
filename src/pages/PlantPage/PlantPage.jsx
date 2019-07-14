import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';
import Sunlight from '../../components/Sunlight/Sunlight';
import { getPlant, deletePlant } from '../../services/plantService';
import LevelOneWater from '../../components/LevelOneWater/LevelOneWater';

class PlantPage extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            watering: [],
            brightness: [],
            waterSum: 0,
            plantGrowth: 0
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;

        getPlant(id).then(function(plant) {
            console.log(plant);
            self.setState({ id: id, name: plant.name });
        });
    }

    increaseWater() {
        var sum = this.state.waterSum;
        sum += 8;
        return sum;
    }

    decreaseWater() {
        var sum = this.state.waterSum;
        sum -= 3;
        return sum;
    }

    determinePlantGrowth() {
        var sum = this.state.waterSum;
        var age = this.state.plantGrowth;
        if (sum >= 50 && sum < 60) {
            age += 1
        } else if (sum >= 60) {
            age -= 1
        } else {
            age = age
        }
        return age;
    }

    handleDelete = (id) => {
        deletePlant(id).then(function(json) {
            window.location = '/profile';
        })
    }

    handleIncrease = () => {
        this.setState({ waterSum: this.increaseWater(), plantGrowth: this.determinePlantGrowth() })
    }

    handleDecrease = () => {
        this.setState({ waterSum: this.decreaseWater(),  plantGrowth: this.determinePlantGrowth() })
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
                <PlantDisplay />
                <Sunlight />
                <LevelOneWater 
                    handleIncrease={this.handleIncrease}
                    handleDecrease={this.handleDecrease}
                />
            </div>
        );
    }
}

export default PlantPage;