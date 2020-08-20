import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Checkbox,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  sections: {
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

export default function SectionNecessity() {
  const classes = useStyles();
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="introduction">
          <Typography
            className={classes.title}
            variant="h3"
          >
            개발 배경 및 필요성
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
                  2020년 불경기로 인한 국내 해운 산업의 폐업 사례 발생
                </Typography>

                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  코로나 19 사태로 인한 무역량의 감소로 인해 컨테이너 재고 처리가 불안정함
                </Typography>


                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  컨테이너 운송 스케줄을 공유해 컨테이너 이동비를 줄이는 시스템 필요 
                </Typography>

                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  컨테이너 이동비를 줄이고, 해운 물동량의 균형을 찾는 공유 서비스가 필요함
                </Typography>

                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  본 서비스에서 컨테이너 과부족 정보를 등록하여 적재적소에 공컨테이너를 공유할 수 있는 체계를 개발하여 항만물류 업계의 물류 비용 절감에 기여
                </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.space120} />
      </div>
    </div>
  );
}
