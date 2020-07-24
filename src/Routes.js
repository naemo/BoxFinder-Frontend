// import React, {useState} from 'react';
import React from 'react';

import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Statistics as StatisticsView,
  Estimation as EstimationView,
  About as AboutView,
  Profile as ProfileView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

// import { signIn } from './views/SignIn/auth';


// const [user, setUser] = useState(null);
// const authenticated = user != null;

// const login = ({ email, password }) => setUser(signIn({ email, password }));
// const logout = () => setUser(null);

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/sign-in"
      />
      <RouteWithLayout
        // authenticated={authenticated}
        // user={user}
        component={StatisticsView}
        exact
        layout={MainLayout}
        path="/statistics"
      />
      <RouteWithLayout
        // authenticated={authenticated}
        // user={user} 
        component={EstimationView}
        exact
        layout={MainLayout}
        path="/estimation"
      />
      <RouteWithLayout
        // authenticated={authenticated}
        // user={user} 
        component={AboutView}
        exact
        layout={MainLayout}
        path="/about"
      />
      <RouteWithLayout
        // authenticated={authenticated}
        // user={user} 
        component={ProfileView}
        exact
        layout={MainLayout}
        path="/profile"
      />
      <RouteWithLayout 
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        // authenticated={authenticated}
        // login={login}
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
