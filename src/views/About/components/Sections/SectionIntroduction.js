import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Checkbox,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  sections: {
    padding: "180px 0"
  },
  container:{
    paddingRight: "100px",
    paddingLeft: "100px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    marginTop: "50px",
    minHeight: "32px",
    textDecoration: "none"
  },
  title: {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    marginTop: "50px",
    minHeight: "32px",
  },
  body: {
    textDecoration: "none",
    fontWeight: "600",
    lineHeight: "1.8"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  space120: {
    height: "120px",
    display: "block"
  },
}));

export default function SectionIntroduction() {
  const classes = useStyles();
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="introduction">
          <Typography
            className={classes.title}
            variant="h3"
          >
            프로젝트 소개
          </Typography>
        <div className={classes.space70} />
        <Grid
          className={classes.grid}
          container
          >
            <Grid
              className={classes.quoteContainer}
              item
            >
                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  공공 데이터를 이용한 공컨테이너 실시간 수요 예측, 빅데이터 분석 서비스
                </Typography>

                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  해운 물동량의 균형을 위해 지역별, 시기별 공컨테이너 과부족 정보를 분석하고, 앞으로의 공컨테이너 물동량을 예측하여 컨테이너 이동비를 절감하는 서비스.
                </Typography>


                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  코로나로 인한 물동량 감소 및 불안정하게 유지되는 공컨테이너 재고를 효율적으로 해결하는 웹 서비스 
                </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.space120} />
      </div>
    </div>
  );
}
