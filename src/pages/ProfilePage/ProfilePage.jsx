import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Index from '../../components/Index/Index';
import Create from '../../components/Create/Create';
import NavBar from '../../components/NavBar/NavBar';


const ProfilePage = (props) => {
    return(
        <div>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <h1>Profile of {props.user.name}</h1>
            <Index user={props.user}/>
            <Link to='/create' className="nav-link">Create</Link>


        </div>
    );
};

export default ProfilePage;