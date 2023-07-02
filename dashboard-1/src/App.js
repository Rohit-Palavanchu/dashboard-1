import React from 'react';
import Login from './components/Login/Login'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.js'
import Home from './components/Home/Home'
const App = () => (
    <Switch>
        <Route exact path='/login' component={Login} />
        <ProtectedRoute exact path='/' component={Home} />
    </Switch>
)
export default App 