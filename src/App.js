import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import Login from './components/Login';
import AuthContextProvider from './context/AuthContextProvider';

const App = () => {
    return (
        <div>
            <AuthContextProvider>
            <Switch>
                <Route path="/"  component={Login} />
            </Switch>
            </AuthContextProvider>
        </div>
    );
};

export default App;