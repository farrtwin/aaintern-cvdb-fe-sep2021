import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import {
    ProvideAuth
} from 'routes/auth/ProvideAuth'

import PrivateRoute from './auth/PrivateRoute'

import App from 'containers/App'
import Admin from 'containers/Admin'
import Login from 'containers/Login'
import HomePage from 'containers/Home_page'

const Routes = () => {

    return (
        <ProvideAuth>
            <Router>
                <Switch>

                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    
                    <Route path="/App">
                        <App/>
                    </Route>

                    <Route path="/login">
                        <Login/>
                    </Route>

                    <PrivateRoute path='/admin'>
                        <Admin/>
                    </PrivateRoute>

                </Switch>
            </Router>
        </ProvideAuth>
    )
}

export default Routes
