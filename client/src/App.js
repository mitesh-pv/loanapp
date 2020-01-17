import React, { Component, Fragment } from 'react';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Loan from './components/auth/Loan';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render(){
    return (
      <Provider store = { store }>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component= {Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path= "/loan" component = {Loan} />
              <Route exact path ="/register" component={Register} />
              <Route exact path ="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
