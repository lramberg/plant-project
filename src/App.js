import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PlantPage from './pages/PlantPage/PlantPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './services/userService';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Create from '../src/components/Create/Create';
import Edit from '../src/components/Edit/Edit';


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
                <Route exact path='/buddy/:id/edit' render={ (props) => 
                    <Edit {...props} />
                } />    
                <Route exact path='/create' render={() => 
                    <Create user={this.state.user}/>
                } />
                <Route exact path='/buddy/:id' render={(props) => 
                    <PlantPage
                        {...props}
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                    />
                } />
                <Route exact path='/profile' render={() => 
                    <ProfilePage 
                        user={this.state.user}
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
