import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography
} from '@material-ui/core';

import {
  Timeline ,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  sections: {
    // background: '#EEEEEE',
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
  body1: {

  },
  body2: {
    textDecoration: "none",
    fontWeight: "600",
  },
  space70: {
    height: "70px",
    display: "block"
  },
  space120: {
    height: "120px",
    display: "block"
  },
  quoteContainer: {
    fontFamily: "'NanumSquare', serif",
    textDecoration: "none",
    fontWeight: "600",
    margin: "0 auto",
    width: "100%",
  }
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
            주요 기능
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
              <Timeline align="alternate">

                <TimelineItem>
                  <TimelineSeparator>
                  <TimelineDot color="secondary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                       <Typography
                        className={classes.body2}
                        variant="h5"
                        >
                          컨테이너 타입별 정보관리
                        </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        className={classes.body2}
                        variant="h5"
                      >
                        공컨테이너 정보 학습
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="secondary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        className={classes.body2}
                        variant="h5"
                      >
                      월별 공유 컨테이너 예측
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        className={classes.body2}
                        variant="h5"
                      >
                        컨테이너 과부족 정보 알림
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="secondary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        className={classes.body2}
                        variant="h5"
                      >
                        회원별 공컨테이너 등록
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        className={classes.body2}
                        variant="h5"
                      >
                        지역별 과부족 정보 시각화
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        className={classes.body2}
                        variant="h5"
                      >
                        월별 컨테이너 예측치 시각화
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                  </Timeline>
            </Grid>
          </Grid>
        </div>
        <div className={classes.space120} />
      </div>
    </div>
  );
}
