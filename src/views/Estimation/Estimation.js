import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Estimation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Estimation
    </div>
  );
};

export default Estimation;
