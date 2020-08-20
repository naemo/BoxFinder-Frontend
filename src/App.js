import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import validate from 'validate.js';

import './assets/scss/index.scss';

import validators from './common/validators';
import Routes from './Routes';


const browserHistory = createBrowserHistory();

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Routes />
        </Router>
    );
  }
}
