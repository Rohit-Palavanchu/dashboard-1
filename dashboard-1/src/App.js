import React from 'react';
import Login from './components/Login/Login'
import { Route, Switch } from 'react-router-dom'
import './App.css'
const App = () => (
    <Switch>
        <Route exact path='/login' component={Login} />
    </Switch>
)
export default App 