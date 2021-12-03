import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import { Charts } from './components/pages/Charts';
import { Maps } from './components/pages/Maps';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import { Home } from './components/pages/Home';
import Alert from './components/layout/Alert';
import { NotFound } from './components/pages/NotFound';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Home}
                />
                <Route
                  exact
                  path='/chart'
                  component={Charts}
                />
                <Route
                  exact
                  path='/map'
                  component={Maps}
                />
                <Route
                  exact
                  path='/user/:login'
                  render={props => (
                    <User {...props} />
                  )}
                />
                <Route
                  component={NotFound}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );



}

export default App;
