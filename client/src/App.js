<<<<<<< HEAD
import React, { Component, Fragment } from 'react';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Loan from './components/auth/Loan';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Alert from './components/layout/Alert';

import Pin from './components/auth/Pin';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import OtpError from './components/auth/OtpError';
import FillLoan from './components/auth/FillLoan';
import BasicDetail from './components/details/BasicDetail';

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
              <Route exact path ="/loan" component = {Loan} />
              <Route exact path ="/register" component={Register} />
              <Route exact path ="/login" component={Login} />
              <Route exact path ="/pin" component ={ Pin } />
              <Route exact path ="/otperror" component = { OtpError } />
              <Route exact path ="/fillLoanForm" component = { FillLoan } />
            </Switch>
          </section>
        </Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
||||||| merged common ancestors
=======
import React, { Component, Fragment } from 'react';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Loan from './components/auth/Loan';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Alert from './components/layout/Alert';

import Pin from './components/auth/Pin';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import OtpError from './components/auth/OtpError';
import FillLoan from './components/auth/FillLoan';
import BasicDetail from './components/details/BasicDetail';
import LoanDetails from './components/auth/LoanDetails';

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
              <Route exact path ="/loan" component = {Loan} />
              <Route exact path ="/register" component={Register} />
              <Route exact path ="/login" component={Login} />
              <Route exact path ="/pin" component ={ Pin } />
              <Route exact path ="/otperror" component = { OtpError } />
              <Route exact path ="/fillLoanForm" component = { FillLoan } />
              <Route exact path ="/loanDetails" component = { LoanDetails } />
            </Switch>
          </section>
        </Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
>>>>>>> 12c92afec6a6278f3aec29b6dd1c154481ae431e
