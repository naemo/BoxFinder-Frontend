import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import classNames from "classnames";
import Parallax from "components/Parallax/Parallax";

import {
  Grid,
  Typography
} from '@material-ui/core';

import {
  SectionIntroduction,
  SectionComposition,
  SectionNecessity,
  SectionAdvantage,
  SectionFunction,
  SectionExpected
} from './components/Sections';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
  image: {
    height: '50vh',
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,.5)',
      height: '100%',
      width: '100%',
      zIndex: -1
    },
  },
  container:{
      color: "#FFFFFF",
      textAlign: "left",
      margin: 'auto'
    },
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "700",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    fontWeight: "600",
    maxWidth: "600px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 60px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
}));

const About = props => {
  const classes = useStyles();

  return (
    <div>
      <Parallax 
        image={require("assets/img/main1.jpg")}
        className={classes.image}
      >
        <div className={classes.container}>
          <Grid
          className={classes.grid}
          container
          >
            <Grid
              className={classes.quoteContainer}
              item
            >
              <div className={classes.brand}>
                <Typography
                  className={classes.title}
                  variant="h1"
                >
                  Box Finder
                </Typography>
                <Typography
                  className={classes.subtitle}
                  variant="h3"
                >
                  - 공공데이터를 활용한 공컨테이너 수요와 공급 분석 및 예측 플랫폼
                </Typography>
              </div>
            </Grid>
          </Grid>
       </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionIntroduction />
        <SectionComposition />
        <SectionNecessity />
        <SectionAdvantage />
        <SectionFunction />
        <SectionExpected />
      </div>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string
};

export default About;
