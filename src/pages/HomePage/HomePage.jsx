import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';



const HomePage = (props) => {
    return(
        <div>
            <h1>Botanical Buddy</h1>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
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