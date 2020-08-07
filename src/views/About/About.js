import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Content } from './components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    width: "90%",
    margin: "10px auto"
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Content />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
