import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';

class PlantPage extends Component {

    render() {
        return(
            <div>
                PlantPage
                <PlantDisplay />
            </div>
        )
    }
}

export default PlantPage;