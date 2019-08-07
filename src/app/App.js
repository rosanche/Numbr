import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import ConnectScreen from '../components/pages/connection-screen/connection-screen';
import HomeScreen from '../components/pages/home-screen/home-screen';
import * as ROUTES from '../constants/routes';
import { WithAuthentification } from '../components/session';

class App extends Component {
    render() {
        return (
            <Router basename='/numbr'>
                <Route exact path={ROUTES.SIGN_IN} component={ConnectScreen} />
                <Route path={ROUTES.HOME} component={HomeScreen} />
            </Router>
        );
    }
}

export default WithAuthentification(App);