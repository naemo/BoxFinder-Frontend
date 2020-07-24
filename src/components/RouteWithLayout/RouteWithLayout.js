import React from 'react';
import { Route } from 'react-router-dom';
// import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
// import { render } from 'node-sass';

const RouteWithLayout = props => {
  // const { authenticated, layout: Layout, component: Component, ...rest } = props;
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      // {...rest}
      // render={matchProps => (
      //   authenticated ? (
      //     render ? (
      //       render(props)
      //     ) : (
      //     <Layout>
      //       <Component {...matchProps} />
      //     </Layout>
      //     )
      //   ) : (
      //     <Redirect
      //       to={{ pathname: "/sign-in", state: { from: props.location } }}
      //     />
      //   )
      // )}
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
