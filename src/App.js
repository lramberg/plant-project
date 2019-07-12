import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PlantPage from './pages/PlantPage/PlantPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './services/userService';
import HomePage from './pages/HomePage/HomePage';


class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser()
        }
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }
    
    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()});
    }

    render() {
        return (
            <div className="App">
            <Switch>
                <Route exact path='/buddy' render={() => 
                    <PlantPage 
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                    />
                } />
                <Route exact path='/signup' render={({ history }) => 
                    <SignupPage
                        history={history}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                    />
                }/>
                <Route exact path='/login' render={({ history }) => 
                    <LoginPage
                        history={history}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                    />
                }/>
                <Route exact path='/' render={() => 
                    <HomePage 
                        handleSignupOrLogin={this.handleSignupOrLogin}
                    />
                } />
            </Switch>
            </div>
        );
    }
}

export default App;
