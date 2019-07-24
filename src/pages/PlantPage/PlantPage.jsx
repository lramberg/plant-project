import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';
import { getPlant, deletePlant, increaseWater } from '../../services/plantService';
import Actions from '../../components/Actions/Actions';
import Sprout from '../../components/Sprout/Sprout';
import Stem from '../../components/Stem/Stem';
import Bud from '../../components/Bud/Bud';
import Flower from '../../components/Flower/Flower';
import styles from './PlantPage.module.css';

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
                return <Stem />;
            case 1.5:
                return <Stem />;
            case 2:
                return <Bud />;
            case 2.5:
                return <Bud />;
            case 3:
                return <Flower />;
            case 3.5:
                return <Flower />;
            default:
                return <Sprout />;
        }
    }

    soilCondition = () => {
        let water = this.state.waterSum;
        let soil = '';
        if (water < 8) {
            soil = 'too dry';
        } else if (water > 20) {
            soil = 'too wet';
        } else {
            soil = 'moist'
        }
        return soil;
    }

    render() {
        var plantState = this.plantState();
        var soil = this.soilCondition();

        return(
            <div className={styles.PlantPage}>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-4">
                            <h1 className={styles.h1}>{this.state.name}</h1>
                            <a href="#" className="btn" onClick={() => this.handleDelete(this.state.id)}><i className="fa fa-trash"></i></a>
                            <Link to={`/buddy/${this.state.id}/edit`} className="btn btn-outline-light">RENAME</Link>
                            <p className={styles.p}>Hint: When a plant grows it initially needs more sun</p>
                            <h4 className={styles.h4}>Soil Condition:</h4>
                            <h3 className={styles.h3}>{soil}</h3>
                        </div>
                        <div className="col-5">
                            <PlantDisplay 
                                plantState={plantState}
                            />                       
                        </div>
                        <div className="col-3">                       
                            <Actions 
                                id={this.state.id}
                                handleIncrease={this.handleIncrease}
                                handleDecrease={this.handleDecrease}
                            />                       
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlantPage;