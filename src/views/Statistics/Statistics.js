import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  KakaoMap,
  Status,
  Charts
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    width: '80%',
    margin: 'auto',
  }
}));

const Statistics = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={8}
          md={12}
          xl={8}
          xs={12}
        >
          <KakaoMap />
        </Grid>
        <Grid
          item
          lg={4}
          md={12}
          xl={4}
          xs={12}
        >
          <Status />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Charts />
        </Grid>
      </Grid>
    </div>
  );
};

export default Statistics;
