import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'material-ui-image';
import { Typography } from '@material-ui/core';
import composition from "assets/img/composition.png";

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
  imgContainer: {
    display: "block",
    width: "80vh",
    margin: "0 auto",
  },
  img: {
    borderStyle: 'none',
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
  }
}));

export default function SectionComposition() {
  const classes = useStyles();
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="introduction">
          <Typography
            className={classes.title}
            variant="h3"
          >
            구성도
          </Typography>
        <div className={classes.space70} />
        <div className={classes.imgContainer}>
          <Image
            src={composition}
            className={classes.img}
            aspectRatio={(16/9)}
            />
          </div>
       </div>
        <div className={classes.space120} />
      </div>
    </div>
  );
}
