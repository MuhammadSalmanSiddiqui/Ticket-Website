import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { FooterData } from "../../../../data";
import classes from "./footer.module.css";
import { color } from "../../../../constant";

const Footer = () => {
  const styles = {
    parentGrid: {
      backgroundColor: color.primary,
    },
    childrenGrid: {
      color: color.primary,
    },
  };
  return (
    <React.Fragment>
      {/* //Footer Coloured Part */}
      <Grid
        className={classes.FooterTop}
        style={styles.parentGrid}
        container
        spacing={1}
      >
        <Hidden only={["xs"]}>
          <Grid item xs={12} sm={1}></Grid>
        </Hidden>

        <Grid className={classes.topdata} item xs={12} sm={12} md>
          <img className={classes.logo} src="/match boletos.svg" />
        </Grid>

        {FooterData.footerTop.map((data) => (
          <Grid
            key={data.topline1}
            className={classes.topdata}
            item
            xs={12}
            sm={6}
            md
          >
            <Typography className={classes.typotop} variant="subtitle2">
              {data.topline1}
            </Typography>
            <Typography className={classes.typotop} variant="subtitle2">
              {data.topline2}
            </Typography>
          </Grid>
        ))}
        <Hidden only={["md"]}>
          <Grid item xs={12} lg={2}></Grid>
        </Hidden>
      </Grid>

      {/* //Footer Without Coloured Part */}
      <Grid className={classes.Footerbottom} container spacing={1}>
        {FooterData.footerBottom.map((data) => (
          <Grid
            key={data.bottomline}
            className={classes.Bottomdata}
            item
            xs={12}
            sm={2}
            md={2}
          >
            <Typography
              className={classes.Bottomdata}
              style={styles.childrenGrid}
              variant="subtitle2"
            >
              {data.bottomline}
            </Typography>
          </Grid>
        ))}

        <Hidden only={["sm", "xs"]}>
          <Grid item md={2}></Grid>
        </Hidden>

        <Grid item xs={12} sm={3} md={2}>
          <img className={classes.icon} src="/fb.svg" alt="fb" />
          <img className={classes.icon} src="/watsapp.svg" alt="watsapp" />
          <img className={classes.icon} src="/twetter.svg" alt="twetter" />
        </Grid>

        <Grid item xs={12} sm={3} md={2}>
          <Typography
            className={classes.Bottomdata}
            style={{ color: "grey" }}
            variant="subtitle2"
          >
            Copyright Match Boletos
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Footer };
