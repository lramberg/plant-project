import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import styles from './HomePage.module.css';



const HomePage = (props) => {
    return(
        <div className={styles.HomePage}>
            <h1 className={styles.h1} >BOTANY BUDDY</h1>
            <h3 className={styles.h3}>grow a friend</h3>
            <div className={styles.linkWrapper}>
                <Link to='/login' className={styles.link}>LOG IN</Link>
                <Link to='/signup' className={styles.link}>SIGN UP</Link>
            </div>
            <Switch>
                <Route exact path='/signup' render={({ history }) => 
                    <SignupPage
                        history={history}
                        handleSignupOrLogin={props.handleSignupOrLogin}
                    />
                }/>
                <Route exact path='/login' render={({ history }) => 
                    <LoginPage
                        history={history}
                        handleSignupOrLogin={props.handleSignupOrLogin}
                    />
                }/>
            </Switch>
        </div>
    );
};

export default HomePage;