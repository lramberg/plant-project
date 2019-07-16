import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Index from '../../components/Index/Index';
import Create from '../../components/Create/Create';
import NavBar from '../../components/NavBar/NavBar';
import styles from './ProfilePage.module.css';


const ProfilePage = (props) => {
    return(
        <div>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <h1 className={styles.h1}>{props.user.name}'s Buddies:</h1>
            <Link to='/create' className={[styles.btn, "btn btn-outline-light mb-5"].join(' ')}>Plant A Seed</Link>
            <Switch>
                <Route exact path='/profile' render={() =>
                    <Index user={props.user}/>
                } />
                <Route exact path='/create' render={() => 
                    <Create {...this.props}/>
                } />
            </Switch>
        </div>
    );
};

export default ProfilePage;