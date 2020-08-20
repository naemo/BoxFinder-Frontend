import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Checkbox,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  sections: {
    background: '#EEEEEE',
    padding: "120px 0"
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

export default function SectionAdvantage() {
  const classes = useStyles();
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="introduction">
          <Typography
            className={classes.title}
            variant="h3"
          >
            특・장점
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
                  본 프로젝트의 빅데이터 분석 예측 모델은 POST-MIS에서 제공하는 기존 공공데이터를 활용하여, 각 항구/규격 별 공공데이터에 대해 구체적으로 해석이 가능한 화이트 박스 예측 모델이 될 예정임.
                </Typography>

                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  자동식별시스템이 자료를 생성하기 이전 자료까지 포함하여 보다 정확한 예측 및 분석을 제공해주려고 함
                </Typography>


                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  각 항구별 데이터 양식을 하나로 통합해서 컨테이너 관련 공공데이터를 전처리를 할 예정임. (컨테이너 관리 현황에 대한 데이터를 제공해주는 모든 항구들을 하나의 데이터 양식으로 통합시켜 전처리를 진행할 예정임.)
                </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.space120} />
      </div>
    </div>
  );
}
