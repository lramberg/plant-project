import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPlants } from '../../services/plantService';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            plants: []
        }
    }

    componentDidMount() {
        var self = this;
        getPlants().then(function(json) {
            self.setState({plants: json})
        })
    }

    render(props) {
        var buddies = this.state.plants.map((plant, idx) => {
            {if(plant.userId == this.props.user._id){
                return (
                    <li key={idx}>
                        <Link to={`/buddy/${plant._id}`}>{plant.name}</Link>
                    </li>
                )
            }}
        });

        return(
            <div>
                <ul>
                    {buddies}
                </ul>
            </div>
        );
    }
}

export default Index;