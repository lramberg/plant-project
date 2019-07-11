import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PlantPage from './pages/PlantPage/PlantPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './services/userService';


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
                <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
                <header className="App-header">
                    <h1>This is the App Component</h1>
                    <PlantPage />
                </header>
            <Switch>
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
            </Switch>
            </div>
        );
    }
}

export default App;
