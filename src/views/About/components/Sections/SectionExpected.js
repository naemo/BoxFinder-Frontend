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

export default function SectionExpected() {
  const classes = useStyles();
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="introduction">
          <Typography
            className={classes.title}
            variant="h3"
          >
            기대 효과 및 활용 분야
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
                  빅데이터를 활용한 수요과 공급을 예측하는 시스템으로 공컨테이너 활용도 증가
                </Typography>

                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  항만물류 업계의 물류 비용 절감 효과해운항만물류산업의 극심한 불황을 타개할 수 있는 해결책 제시
                </Typography>


                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  컨테이너 항구별 수출입 물동량 분석, 항만지역 교통량 분석, 공 컨테이너 재고 분석 등 효율적인 운영 관리 가능
                </Typography>
                
                <Typography
                className={classes.body}
                variant="h5"
                >
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                  선사의 컨테이너 담당자는 컨테이너 공급과 관련한 장기계획을 수립해 리스크를 극복 할 수 있음
                </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.space120} />
      </div>
    </div>
  );
}
