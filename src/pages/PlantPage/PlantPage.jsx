import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';

const PlantPage = (props) => {
    return(
        <div>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </div>
    );
}

export default PlantPage;