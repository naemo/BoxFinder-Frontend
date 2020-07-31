import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  KakaoMap_,
  Status_,
  Charts_
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
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
          <KakaoMap_ />
        </Grid>
        <Grid
          item
          lg={4}
          md={12}
          xl={4}
          xs={12}
        >
          <Status_ />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Charts_ />
        </Grid>
      </Grid>
    </div>
  );
};

export default Estimation;
