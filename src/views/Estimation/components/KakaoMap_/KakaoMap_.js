import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';


import Map from './map';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const KakaoMap_ = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Map" />
      <Divider />
      <CardContent className={classes.content}>
        <Map/>
      </CardContent>
    </Card>
  );
};

KakaoMap_.propTypes = {
  className: PropTypes.string
};

export default KakaoMap_;
