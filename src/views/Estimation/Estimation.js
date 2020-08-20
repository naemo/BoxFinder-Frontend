import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  KakaoMap2,
  Status2,
  Charts2
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    width: '80%',
    margin: 'auto'
  }
}));

const Estimation = () => {
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
          <KakaoMap2 />
        </Grid>
        <Grid
          item
          lg={4}
          md={12}
          xl={4}
          xs={12}
        >
          <Status2 />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Charts2 />
        </Grid>
      </Grid>
    </div>
  );
};

export default Estimation;
